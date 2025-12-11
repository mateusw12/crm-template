import { Role, User } from "@/types";

export const mockUsers: User[] = [
  {
    id: 'u1',
    name: 'Admin Local',
    email: 'admin@local.test',
    role: Role.ADMIN,
    password: 'admin123',
  },
  {
    id: 'u2',
    name: 'Vendedor Exemplo',
    email: 'vendedor@local.test',
    role: Role.VENDEDOR,
    password: 'vendedor123',
  },
];
