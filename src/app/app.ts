import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'git101-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('git101');
  protected readonly name = 'Bank Nattapong';

  getTitle() {
    return this.title;
  }

  getName() {
    return this.name;
  }
}
