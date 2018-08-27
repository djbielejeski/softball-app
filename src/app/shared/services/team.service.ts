import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeamModel } from '@app/shared/models';
import { BaseService } from './base.service';

@Injectable()
export class TeamService extends BaseService<TeamModel> {
  route = '/api/teams';

  constructor(public http: HttpClient) {
    super(http);
  }
}
