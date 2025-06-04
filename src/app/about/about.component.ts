import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  public count =0;

 
  ngOnInit(){
  console.log('hello onint')
  }

  increment() {
    this.count++;
  }
  subtract(){
    this.count--;
    if (this.count < 0) {
      this.count=0;
    }
  }
}
