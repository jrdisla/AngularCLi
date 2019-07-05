import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {EventListComponent} from '../events/event-list.component';
import {FormsModule} from '@angular/forms';
import {EventFilterPipe} from '../events/event-list.pipe';
import {ThumbComponent} from '../shared/thumb.component';


@NgModule({
  declarations: [
    AppComponent, EventListComponent, EventFilterPipe, ThumbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
