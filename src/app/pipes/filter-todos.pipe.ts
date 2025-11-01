import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../components/model/todo.type';

@Pipe({
  name: 'filterTodos',
  standalone: true
})
export class FilterTodosPipe implements PipeTransform {

  transform(todos: Todo[], searchterm: string): Todo[] {

    if (!searchterm){
      return todos;
    }

    const text = searchterm.toLowerCase();
    return todos.filter(todo =>{
      return todo.title.toLowerCase().includes(text);
    });
   
  }

}
