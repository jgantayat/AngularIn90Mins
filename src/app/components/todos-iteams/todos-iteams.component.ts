import { Component , input, output} from '@angular/core';
import { Todo } from '../model/todo.type';
import { HighlightCompletedTodoDirective } from '../../directives/highlight-completed-todo.directive';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todos-iteams',
  standalone: true,
  imports: [HighlightCompletedTodoDirective, UpperCasePipe],
  templateUrl: './todos-iteams.component.html',
  styleUrl: './todos-iteams.component.css'
})
export class TodosIteamsComponent {
 todoItems= input.required<Todo>();
 todoToggeled= output<Todo>();

 todoClicked(){this.todoToggeled.emit(
  this.todoItems()
)}
}
