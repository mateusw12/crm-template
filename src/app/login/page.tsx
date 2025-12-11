import LoginForm from "./LoginForm";

export const metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <main style={{ height: "100vh", width: "100vw", padding: 0, margin: 0 }}>
      <LoginForm />
    </main>
  );
}
