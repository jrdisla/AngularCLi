import {Component, OnChanges} from '@angular/core';

@Component({
  selector: 'app-awcomponent',
  templateUrl: './thumb.component.html',
  styleUrls: ['./thumb.component.css']
})
export class ThumbComponent {
  rating = 1;
  thumbWidth: number;
  ngOnchanges(): void {
    this.thumbWidth = this.rating * 86 / 5;
  }
}
