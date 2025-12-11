import { Opportunity, OpportunityStage } from "@/types";

export const mockOpportunities: Opportunity[] = [
  {
    id: 'o1',
    clientId: 'c1',
    title: 'Venda Pacote Básico',
    value: 1200,
    stage: OpportunityStage.CONTATO_REALIZADO,
    createdAt: new Date().toISOString(),
    expectedClose: new Date(Date.now() + 1000 * 60 * 60 * 24 * 14).toISOString(),
  },
  {
    id: 'o2',
    clientId: 'c2',
    title: 'Contrato Anual',
    value: 15000,
    stage: OpportunityStage.LEAD_NOVO,
    createdAt: new Date().toISOString(),
  },
];
