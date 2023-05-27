import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Antman'];
  public deletedHero?: string;

  constructor() { }

  ngOnInit(): void {
  }

  removeLastHero():void{

    this.deletedHero = this.heroNames.pop();
    console.log( this.deletedHero );
 
  }

}
