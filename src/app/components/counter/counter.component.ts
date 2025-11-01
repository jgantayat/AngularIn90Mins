import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  counterValue= signal(0)

  increament(){
      this.counterValue.update((val) => val + 1)
  }

  decreament(){
      this.counterValue.update((val) => val - 1)
  }

  reset(){
      this.counterValue.set(0)
  }
}
