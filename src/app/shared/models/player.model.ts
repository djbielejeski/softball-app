import { BaseModel } from './base.model';
export interface PlayerModel extends BaseModel {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  team: BaseModel;
}
