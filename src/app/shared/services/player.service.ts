import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlayerModel } from '@app/shared/models';
import { BaseService } from './base.service';

@Injectable()
export class PlayerService extends BaseService<PlayerModel> {
  route = '/api/players';

  constructor(public http: HttpClient) {
    super(http);
  }
}
