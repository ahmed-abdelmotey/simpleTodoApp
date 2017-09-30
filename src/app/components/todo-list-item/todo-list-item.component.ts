import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
// , Router
import { TodosListsService } from "../../services/todos-lists/todos-lists.service";
import { ITodoList } from "../../services/todos-lists/todo-list";

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})

export class TodoListItemComponent implements OnInit {

  constructor(private _TodosListsService:TodosListsService, private _actRoot:ActivatedRoute, private _router:Router ) { 
    let id:number = this._actRoot.snapshot.params['id'];
    this.todo = this._TodosListsService.getTodoById(id);
    if(!this.todo){
      this._router.navigate(['notfound'])
    }
  }
  todo:ITodoList;
  ngOnInit() {
    
  }


  addTask(evt){
    if(evt.target.value){
      this.todo.Tasks.unshift({Id: Math.max.apply(Math,this.todo.Tasks.map(function(o){return o.Id;})) + 1,Name:evt.target.value, isDone:false})
      evt.target.value = '';
    }
  }

  toggleDone(evt, id){
    this.todo.Tasks = this.todo.Tasks.map(c => {
      if(c.Id == id) c.isDone = !c.isDone;
      return c
    });
    // this.todo.Tasks[index].isDone = !this.todo.Tasks[index].isDone;
  }

  markAllDone(){
    this.todo.Tasks.forEach(c => c.isDone = true);
  }

  markAllUnDone(){
    this.todo.Tasks.forEach(c => c.isDone = false);
  }

  removeTask(evt, id){
    this.todo.Tasks = this.todo.Tasks.filter(c => c.Id != id);
  }
}
