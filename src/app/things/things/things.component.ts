import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Thing } from '../models/Thing';

@Component({
  selector: 'app-things',
  templateUrl: './things.component.html'
})
export class ThingsComponent {

  @Input() things: Thing[];
  @Output() thingClicked: EventEmitter<Thing> = new EventEmitter<Thing>();

  handleThingClick(thing: Thing) {
    this.thingClicked.emit(thing);
  }
}
