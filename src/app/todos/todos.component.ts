import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from '../components/model/todo.type';
import { catchError } from 'rxjs';
import { TodosIteamsComponent } from '../components/todos-iteams/todos-iteams.component';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodosIteamsComponent, FormsModule,FilterTodosPipe ],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  
  todoservice = inject(TodosService);
  todoIteams = signal<Array<Todo>>([]);
  searchterm= signal('')
  ngOnInit(): void {
    this.todoservice.getTodosFromApi()
    .pipe(
      catchError((error)=>{
        console.log(error);
        throw error
      })
    )
    .subscribe((todos) =>{
      this.todoIteams.set(todos)
    })
    // console.log(this.todoservice.todoItems);
    // this.todoIteams.set(this.todoservice.todoItems)
  }

  UpdatetoDoItem(todoiteam: Todo){
    this.todoIteams.update((todos)=>{
      return todos.map(todo =>{
        if (todo.id==todoiteam.id){
          return{
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    })
  }
}
