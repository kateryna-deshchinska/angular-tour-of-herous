import { Component } from '@angular/core';
import { Hero } from "../hero";
import {HEROUS} from "../mock-herous";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  herous = HEROUS;
  selectedHero?: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
