import { Pipe, PipeTransform } from '@angular/core';
import { Thing } from './models/Thing';

@Pipe({
  name: 'starredThings'
})
export class StarredThingsPipe implements PipeTransform {

  transform(things: Thing[] = []): Thing[] {
    return things.filter(thing => thing.starred);
  }
}
