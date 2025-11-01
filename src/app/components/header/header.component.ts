import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../greeting/greeting.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // Data binding using signal()
  // title=signal("My first AngularIn90Mins application") 

  //Data binding using not signal()
  title=("My first AngularIn90Mins application")
}

