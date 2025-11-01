import { inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Todo } from '../components/model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  http = inject(HttpClient)
  // todoItems: Array<Todo> =[
  //   {
  //     title: "Groceries",
  //     id: 0,
  //     userId: 190,
  //     completed: false
  //   },
  //   {
  //     title: "Prepare for interview",
  //     id: 1,
  //     userId: 190,
  //     completed: true
  //   },
  //   {
  //     title: "Go to gym",
  //     id: 2,
  //     userId: 190,
  //     completed: false
  //   }
  // ]
  
  getTodosFromApi(){
    const url=`https://jsonplaceholder.typicode.com/todos`
    return this.http.get<Array<Todo>>(url);
  }
}
