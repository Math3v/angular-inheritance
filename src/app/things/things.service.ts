import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Thing } from './models/Thing';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class ThingsService {

  constructor(
    private http: Http
  ) { }

  fetchThings(): Observable<Thing[]> {
    return this.http.get('assets/data/things.json')
      .map(response => response.json())
      .map(things => things.map(thing => new Thing(thing)));
  }
}
