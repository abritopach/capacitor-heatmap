import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, pairwise } from 'rxjs/operators';
import { Router, RoutesRecognized } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RouteEventsService {

  // Save the previous route.
  public previousRoutePath = new BehaviorSubject<string>('');

  constructor(private router: Router, private location: Location) {

    // Initial previous route will be the current path for now.
    this.previousRoutePath.next(this.location.path());

    // On every route change take the two events of two routes changed(using pairwise)
    // and save the old one in a behavious subject to access it in another component
    // we can use if another component like intro-advertise need the previous route
    // because he need to redirect the user to where he did came from.

    /*
    this.router.events.pipe(
      filter(e => e instanceof RoutesRecognized),
      pairwise(),
        )
    .subscribe((event: any[]) => {
        this.previousRoutePath.next(event[0].urlAfterRedirects);
    });
    */


    this.router.events
    .pipe(filter((evt: any) => evt instanceof RoutesRecognized), pairwise())
    .subscribe((events: RoutesRecognized[]) => {
      console.log(events);
      console.log('previous url', events[0].urlAfterRedirects);
      this.previousRoutePath.next(events[0].urlAfterRedirects);
    });
  }
}
