import {Component, OnInit} from '@angular/core';
import { Hero } from "../hero";
import {HEROUS} from "../mock-herous";
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit{
  herous: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService,
              private messageService: MessageService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes =>
    this.herous = heroes);
  }
}
