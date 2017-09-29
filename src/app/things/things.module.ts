import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ThingsComponent } from './things/things.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StarredPageComponent } from './starred-page/starred-page.component';
import { ThingsService } from './things.service';
import { StarredThingsPipe } from './starred-things.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    ThingsComponent,
    HomePageComponent,
    StarredPageComponent,
    StarredThingsPipe
  ],
  providers: [
    ThingsService
  ],
  exports: [
    HomePageComponent,
    StarredPageComponent
  ]
})
export class ThingsModule { }
