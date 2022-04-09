import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './messages/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // service in service scenario below:
  constructor(private messageService: MessageService) { }

  // getHeroes(): Hero[] { DON'T want to use this b/c its synchronous and won't work when fetching data; need asynchronous observable
  //   return HEROES;
  // }

  // observable for asnychronous data fetching
  getHeroes(): Observable<Hero[]> {
    const heroes = of (HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
