import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }                 from '@angular/common';
import { HeroService } from './hero.service';
import { Hero } from './hero';


@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls:['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    @Input() hero:Hero;

    constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location
    ) {}
    
    ngOnInit(): void {
      this.route.params.forEach((params: Params) => {
        if (params['id'] !== undefined) {
          let id = +params['id'];
          this.heroService.getHero(id)
              .then(hero => this.hero = hero);
        } 
      });
    }

    goBack(): void {
      this.location.back();
    }
}