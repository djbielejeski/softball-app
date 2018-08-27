import { BaseModel } from './base.model';
export interface TeamModel extends BaseModel {
  name: string;
  league: BaseModel;
}
