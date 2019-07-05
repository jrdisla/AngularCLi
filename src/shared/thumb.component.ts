import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'app-awcomponent',
  templateUrl: './thumb.component.html',
  styleUrls: ['./thumb.component.css']
})
export class ThumbComponent {
  @Input() rating: number;
  thumbWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter();
  change(): void {
    if (this.rating === 0) {
      this.thumbWidth = 0;
    } else {
      this.thumbWidth = this.rating * 26 / 5;
    }
  }
  ngOnchanges(): void {
    this.thumbWidth = this.rating * 26 / 5;
  }
  onClick() {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked.`);
  }
}
