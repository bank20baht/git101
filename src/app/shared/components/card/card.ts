import { Component, Input } from '@angular/core';

@Component({
  selector: 'git101-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() title!: string;
  @Input() desc!: string;
}
