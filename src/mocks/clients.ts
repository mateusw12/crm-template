import { Client, ClientStatus } from "@/types";

export const mockClients: Client[] = [
  {
    id: 'c1',
    name: 'João Silva',
    document: '123.456.789-00',
    phone: '+55 11 99999-0000',
    email: 'joao.silva@example.com',
    address: {
      street: 'Rua A',
      number: '123',
      city: 'São Paulo',
      state: 'SP',
      zip: '01000-000',
      country: 'BR',
    },
    responsible: 'João Silva',
    status: ClientStatus.LEAD,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'c2',
    name: 'Acme Comércio Ltda',
    document: '12.345.678/0001-99',
    phone: '+55 21 98888-1111',
    email: 'contato@acme.com',
    responsible: 'Mariana',
    status: ClientStatus.ACTIVE,
    createdAt: new Date().toISOString(),
  },
];
