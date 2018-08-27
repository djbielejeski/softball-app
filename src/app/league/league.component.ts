import { Component, OnInit } from '@angular/core';
import { LeagueService } from '@app/shared/services';
import { LeagueModel } from '@app/shared/models';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {
  items: LeagueModel[] = [];
  newItem: LeagueModel;

  constructor(private service: LeagueService) {

  }

  ngOnInit() {
    this.createNewItem();

    this.service.get().subscribe(items => {
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
      name: ''
    };
  }
}
