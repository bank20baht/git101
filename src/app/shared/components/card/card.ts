import { Component, Input } from '@angular/core';
import { InputForms } from '../input-forms/input-forms';

@Component({
  selector: 'git101-card',
  imports: [InputForms],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() title!: string;
  @Input() desc!: string;
}
