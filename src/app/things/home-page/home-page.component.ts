import { Component, OnInit } from '@angular/core';
import { ThingsService } from '../things.service';
import { Thing } from '../models/Thing';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {

  things: Thing[];

  constructor(
    private thingsService: ThingsService
  ) { }

  ngOnInit() {
    this.getThings();
  }

  getThings() {
    this.fetchThings().subscribe(things => {
      this.things = things;
    });
  }

  fetchThings() {
    return this.thingsService.fetchThings();
  }

  thingClicked(thing: Thing) {
    console.log('Clicked ', thing );
  }
}
