import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
@Component({
  templateUrl: './event-details.component.html'
})
export class EventDetailsComponent {
  pageTitle = "Event Details";

    constructor(private route: ActivatedRoute, private router: Router ){
      this.route.paramMap.subscribe(params =>{
        let id = params.get('id');
        this.pageTitle += `: ${id}`;
      });
    }
    onBack(): void {
      this.router.navigate(['events']);
    }
}
