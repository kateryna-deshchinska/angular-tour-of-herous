import { Injectable } from '@angular/core';
import { Hero } from "./hero";
import { HEROUS } from "./mock-herous";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROUS);
    this.messageService.add('Hero service: fetched heroes')
    return heroes;
  }
}
