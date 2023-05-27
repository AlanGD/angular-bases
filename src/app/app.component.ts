import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi primera app de Angular';
  counter: number = 10;



  increment(value:number):void{
    this.counter += value
  }

  resetNumber():void{
    this.counter = 10;
  }
}
