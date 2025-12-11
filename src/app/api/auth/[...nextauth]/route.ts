import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { mockUsers } from '../../../../mocks/users';
import type { NextAuthOptions } from 'next-auth';

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const user = mockUsers.find(
          (u) => u.email === credentials.email && u.password === credentials.password
        );
        if (!user) return null;
        // do not return password
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...safe } = user as any;
        return safe;
      },
    }),
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    async jwt({ token, user }) {
      if (user) (token as any).user = user;
      return token;
    },
    async session({ session, token }) {
      if ((token as any).user) session.user = (token as any).user;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET ?? 'dev-secret',
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
