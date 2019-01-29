import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROS } from '../mock-heros';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css', '../app.component.css']
})
export class HerosComponent implements OnInit {

  constructor() { }

  heros = HEROS;

  selectedHero: Hero;

  ngOnInit() {
  }

  onSelect(hero:Hero): void {
    if (this.selectedHero != null && this.selectedHero.id === hero.id)
    {
      this.selectedHero = null;
    }
    else
    {
      this.selectedHero = hero;
    }
  }
}
