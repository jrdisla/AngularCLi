import { Component } from '@angular/core';
import {EventService} from '../events/event.service';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EventService,RouterModule]
})
export class AppComponent {
  title = 'Local Events App';
}
