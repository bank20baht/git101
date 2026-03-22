import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './shared/components/card/card';
import { RadioForms } from './shared/components/radio-forms/radio-forms';
import { Select } from './shared/components/select/select';

@Component({
  selector: 'git101-root',
  imports: [RouterOutlet, Card, RadioForms, Select],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('git101');

  getTitle() {
    return this.title;
  }
}
