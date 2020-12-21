import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../../servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  constructor(private heroService: HeroesService) {
    console.log('Constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.heroes = this.heroService.getHeroes();
    console.log(this.heroes);
  }
}
