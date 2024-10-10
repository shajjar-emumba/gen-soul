import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [],
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.scss',
})
export class CallToActionComponent {
  @Input() text: string = '';
  @Output() clicked = new EventEmitter();

  onClick() {
    this.clicked.emit();
  }
}
