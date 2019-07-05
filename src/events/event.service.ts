import {Injectable} from '@angular/core';
import {IEvent} from './event';

@Injectable()
export class EventService {
  getEvents(): IEvent[] {
    return [{
      name: 'Event 1',
      code: 'Evt100',
      description: 'The first event',
      date: '2016.01.01',
      time: '1:00 PM',
      duration: '1 Hour',
      fee: 1,
      rating: 1,
      imageUrl : 'https://openclipart.org/image/300px/svg_to_png/193230/Tux-at-the-Beach-by-Merlin2525.png',
      location: {
        streetAddr: '101 Main St.',
        city: 'Los Angeles',
        state: 'CA',
        zip: '87885',
        lon: 0,
        lat: 0
      },
      capacity: 100
    },
      {
        name: 'Event 2',
        code: 'Evt200',
        description: 'The second event',
        date: '2016.02.02',
        time: '2:00 PM',
        duration: '2 Hours',
        fee: 2,
        rating: 2,
        imageUrl : 'https://openclipart.org/image/300px/svg_to_png/221228/Ice-Cream-Beach.png',
        location: {
          streetAddr: '202 Main St.',
          city: 'Los Angeles',
          state: 'CA',
          zip: '87885',
          lon: 0,
          lat: 0
        },
        capacity: 200
      },
      {
        name: 'Event 3',
        code: 'Evt300',
        description: 'The third event',
        date: '2016.03.03',
        time: '3:00 PM',
        duration: '3 Hours',
        fee: 3,
        rating: 3,
        imageUrl : 'https://openclipart.org/image/300px/svg_to_png/216716/plage-1-REMIX.png',
        location: {
          streetAddr: '303 Main St.',
          city: 'Los Angeles',
          state: 'CA',
          zip: 87885,
          lon: 0,
          lat: 0
        },
        capacity: 300
      },
      {
        name: 'Event 4',
        code: 'Evt400',
        description: 'The fourth event',
        date: '2016.04.04',
        time: '4:00 PM',
        duration: '4 Hours',
        fee: 4,
        rating: 4,
        imageUrl : 'https://openclipart.org/image/300px/svg_to_png/5351/addon-sandcastle-2.png',
        location: {
          streetAddr: '404 Main St.',
          city: 'Los Angeles',
          state: 'CA',
          zip: 87885,
          lon: 0,
          lat: 0
        },
        capacity: 400
      }
    ];
  }
}
