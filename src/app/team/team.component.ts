import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '@app/shared/services';
import { PlayerModel } from '@app/shared/models';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  items: PlayerModel[] = [];
  newItem: PlayerModel;
  private teamId: string = '';

  constructor(private service: PlayerService, private activeRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.teamId = this.activeRoute.snapshot.params.id;
    this.createNewItem();

    this.service.get({ team: this.teamId }).subscribe(items => {
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

  newItemValid() {
    return this.newItem.firstName &&
           this.newItem.lastName;
  }


  createNewItem() {
    this.newItem = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      team: {
        _id: this.teamId
      }
    };
  }
}
