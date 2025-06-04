import { Component, Input } from '@angular/core';
import { RouterOutlet, withComponentInputBinding } from '@angular/router';
import { HeaderComponent } from "../pages/header/header.component";
import { TodopageComponent } from '../pages/todopage/todopage.component';
import { FooterComponent } from '../pages/footer/footer.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,TodopageComponent,FooterComponent,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  Mytitle:string = 'Todo List';
   parentMessage: string = 'Todo List Application';
  title = 'todolist';
}
