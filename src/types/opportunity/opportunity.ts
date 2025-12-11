import { OpportunityStage } from './opportunity-stage.enum';

export interface Opportunity {
  id: string;
  clientId: string;
  title: string;
  value?: number;
  stage: OpportunityStage;
  createdAt?: string;
  expectedClose?: string;
}
