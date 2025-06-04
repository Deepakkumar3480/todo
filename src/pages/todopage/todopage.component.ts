import { Component,OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface TODO {
  id:Number;
  title:string;
  desc:string;
  status:boolean;
};

@Component({
  selector: 'app-todopage',
  imports: [FormsModule],
  templateUrl: './todopage.component.html',
  styleUrl: './todopage.component.css'
})


  
export class TodopageComponent {

  todos:TODO[] = [];
  toggle:boolean = false;
  index:number = 0;
  title:string ='';
  desc:string ='';

  newTodo: TODO = {
  id: 0,
  title: '',
  desc: '',
  status: false,
};

ngOnInit(){
  console.log('onint is this')
}
ngOnChanges() {
    console.log('hello from ngOnChanges');
  }


  setTodo(event:any){
    alert('set todo triggered');
    this.newTodo = event.target.value;
    console.log(this.newTodo);
  }

  addTodo(){
    this.newTodo={...this.newTodo, id: this.todos.length +1,status:false};
    if(!this.newTodo.title){
      alert('title should not empty');
      return;
    }
    if(!this.newTodo.desc){
      alert('description should not empty');
      return;
    }
    this.todos.push(this.newTodo);
    this.newTodo = {
      ...this.newTodo,
      title:'',
      desc:'',
      status:false
    }
    console.log(this.todos)

  }

  removeTodo(i:number){
  this.todos.splice(i, 1);
    alert('remove todo triggered');
  }

  updateTodo(i:number){
    // prompt("hello i am")
   
    this.toggle = true;
     this.index=i;
    this.todos[i].status = !this.todos[i].status;
    // alert('update todo triggered');
    console.log(this.todos);
  }

  setupdatedValue(){
    if(!this.title){
      alert('title should not empty');
     return;
    }
    if(!this.desc){
      alert('description should not empty');
      return;
    }
     this.todos[this.index].title = this.title;
     this.todos[this.index].desc = this.desc;
    this.title = '';
    this.desc = '';
    this.index = 0;
    this.toggle = false;

  }

  existpopup(){
    this.index =0;
    this.title = '';
    this.desc = '';
    this.toggle = false;
  }

}
