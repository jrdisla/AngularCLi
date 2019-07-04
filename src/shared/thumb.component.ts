import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-awcomponent',
  templateUrl: './thumb.component.html',
  styleUrls: ['./thumb.component.css']
})
export class ThumbComponent {
  @Input() rating: number;
  thumbWidth: number;
  change(): void{
    this.thumbWidth = this.rating * 86 / 5;
  }
  ngOnchanges(): void {
    this.thumbWidth = this.rating * 86 / 5;
  }
}
