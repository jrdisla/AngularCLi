import {Component, OnInit} from '@angular/core';
import {IEvent} from './event';
import {EventFilterPipe} from './event-list.pipe';
import {EventService} from './event.service';

@Component ({
selector: 'app-events',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: [EventFilterPipe]
})
export class EventListComponent implements OnInit {
  pageTitle = 'Event List';
  imageW = 50;
  imageH = 50;
  showIma = false;
  criteria = '';
  events: IEvent[];
  constructor(private eventService: EventService) {
  }
  toggleImg(): void {
    this.showIma = !this.showIma;
  }
  ngOnInit(): void {
    this.eventService.getEvents().subscribe(events => this.events = events)
  }
  onRatingClicked(message: string): void {
    this.pageTitle = 'Event List: ' + message;
  }
}
