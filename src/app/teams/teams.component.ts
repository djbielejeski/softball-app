import { Component, OnInit } from '@angular/core';
import { TeamService } from '@app/shared/services';
import { TeamModel } from '@app/shared/models';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  items: TeamModel[] = [];
  newItem: TeamModel;
  private leagueId: string = '';

  constructor(private service: TeamService, private activeRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.leagueId = this.activeRoute.snapshot.params.id;
    this.createNewItem();

    this.service.get({ 'league': this.leagueId }).subscribe(items => {
      this.items = items;
    });

  }

  addItem() {
    this.service.post(this.newItem).subscribe((item) => {
      // push the item to the front of the array
      this.items.unshift(item);
      this.createNewItem();
    });
  }

  createNewItem() {
    this.newItem = {
      name: '',
      league: {
        _id: this.leagueId
      }
    };
  }
}
