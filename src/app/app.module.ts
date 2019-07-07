import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {EventListComponent} from '../events/event-list.component';
import {FormsModule} from '@angular/forms';
import {EventFilterPipe} from '../events/event-list.pipe';
import {ThumbComponent} from '../shared/thumb.component';
import {HttpClientModule} from "@angular/common/http";
import {EventDetailsComponent} from "../events/event-details.component";
import {WelcomeComponent} from "../home/welcome.component";
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent, EventListComponent, EventFilterPipe, ThumbComponent, EventDetailsComponent,WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
