import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BirthdayListComponent } from './birthday-list/birthday-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BirthdayListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BirthDayBuddy';
}
