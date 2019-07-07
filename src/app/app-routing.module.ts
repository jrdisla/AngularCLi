import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "../home/welcome.component";
import {EventListComponent} from "../events/event-list.component";
import {EventDetailsComponent} from "../events/event-details.component";

//ng generate module app-routing --flat --module=app
const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'events', component: EventListComponent },
  { path: 'events/:id',component: EventDetailsComponent},
  { path: '',redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
