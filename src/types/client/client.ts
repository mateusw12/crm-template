import { Address } from "./address";
import { ClientStatus } from "./client-status.enum";


export interface Client {
  id: string;
  name: string;
  document?: string; // CPF/CNPJ
  phone?: string;
  email?: string;
  address?: Address;
  responsible?: string; // contato responsável em empresas
  status: ClientStatus;
  createdAt?: string;
}
