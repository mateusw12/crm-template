import { OpportunityStage } from '../opportunity/opportunity-stage.enum';

export interface PipelineStage {
  id: string;
  name: string;
  key: OpportunityStage;
  order: number;
}
