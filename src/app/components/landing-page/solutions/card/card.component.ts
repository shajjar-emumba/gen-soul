import { Component, Input } from '@angular/core';
import { Solution } from '../../../../model/interfaces';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() solution!: Solution;

  onCardClick() {
    console.log(
      'Open from if user is not registerd other wise redirect to details page'
    );
  }
}
