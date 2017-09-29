import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ThingsModule, HomePageComponent, StarredPageComponent } from './things';

const appRoutes: Routes = [
  { path: '',        component: HomePageComponent    },
  { path: 'starred', component: StarredPageComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ThingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
