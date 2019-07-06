import {Injectable} from '@angular/core';
import {IEvent} from './event';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class EventService {
  private url = "http://localhost:3000/data";
  constructor( private http: HttpClient ){
  }
  getEvents() {
    return this.http.get<IEvent[]>(this.url);
  }
}
