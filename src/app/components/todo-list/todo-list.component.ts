import { Component, OnInit } from '@angular/core';
import { TodosListsService } from "../../services/todos-lists/todos-lists.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos = [];
  todoName:string;
  todoDueDate: Date = new Date();

  showDialog = false;

  currentDate:string = new Date().toLocaleDateString();

  constructor(private _TodosListsService:TodosListsService) { }
  
  ngOnInit() {
    this.todos = this._TodosListsService.getTodos();
  }

  addTodoList(){
    if(this.todoName){
      this.todos.unshift({Id: Math.max.apply(Math,this.todos.map(function(o){return o.Id;})) + 1, Name: this.todoName, DueDate: this.todoDueDate.toLocaleDateString(), Tasks: []})
      this.todoName = "";
      this.showDialog = false;
    }
  }
  
  
}
