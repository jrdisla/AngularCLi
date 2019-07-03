import {Pipe, PipeTransform} from '@angular/core';
import {IEvent} from './event';


@Pipe({name: 'eventFilter'})
export class EventFilterPipe implements PipeTransform {
  transform(value: any[], args: string[]): any[] {
    const filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
    return filter ? value.filter((event: IEvent) =>
          event.name.toLocaleLowerCase().indexOf(filter) !== -1) : value;
  }
}
