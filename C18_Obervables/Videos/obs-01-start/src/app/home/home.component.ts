import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // interval function built into rjxs; pass in number in milliseconds that will fire an event every second
    // can subscribe to this event every second; add count function
    // goal: fire an event every second and log to console
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count)
    // })

    const customIntervalObservable = new Observable(observer=> {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count == 2 ) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'))
        }
        count++;
      }, 1000)
    });

    this.firstObsSubscription =  customIntervalObservable.subscribe(data => {
    //handle paramaeter
      console.log(data);
    //error parameter:
    }, error => {
      alert(error.message)
    // complete parameter:
    }, () =>  {
      console.log('Completed!')
    }
    );
  }

  // whenever we leave this component, stop subscription/obervable
  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
