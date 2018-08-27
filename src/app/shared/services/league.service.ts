import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LeagueModel } from '@app/shared/models';
import { BaseService } from './base.service';

@Injectable()
export class LeagueService extends BaseService<LeagueModel> {
  route = '/api/league';

  constructor(public http: HttpClient) {
    super(http);
  }
}
