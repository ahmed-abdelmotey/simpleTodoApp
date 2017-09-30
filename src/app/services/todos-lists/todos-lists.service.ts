import { Injectable } from '@angular/core';
import { ITodoList }  from './todo-list'

let todos:ITodoList[] = [
  {
    Id:1,
    DueDate:"24/7/2017", 
    Name:"todo list 1",
    Tasks:[
      { 
        Id:1,
        Name: "Task 11",
        isDone: true
      },
      { 
        Id:2,
        Name: "Task 12",
        isDone: false
      },
      { 
        Id:3,
        Name: "Task 13",
        isDone: false
      }
    ]
  },
  {
    Id:2,
    DueDate:"24/7/2017", 
    Name:"todo list 2",
    Tasks:[
      { 
        Id:1,
        Name: "Task 21",
        isDone: false
      },
      { 
        Id:2,
        Name: "Task 22",
        isDone: false
      },
      { 
        Id:3,
        Name: "Task 23",
        isDone: false
      }
    ]
  },
  {
    Id:3,
    DueDate:"24/7/2017", 
    Name:"todo list 3",
    Tasks:[
      { 
        Id:1,
        Name: "Task 31",
        isDone: false
      },
      { 
        Id:2,
        Name: "Task 32",
        isDone: false
      },
      { 
        Id:3,
        Name: "Task 33",
        isDone: false
      }
    ]
  }
]

@Injectable()
export class TodosListsService {

  constructor() { }

  getTodos(){
    return todos;
  }
  
  getTodoById(id){
    return todos.filter(c=> c.Id == id)[0];
  }
}
