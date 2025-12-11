import { ActivityType } from './activity-type.enum';

export interface Activity {
  id: string;
  clientId?: string;
  opportunityId?: string;
  type: ActivityType;
  content: string;
  date: string;
  authorId?: string;
}
