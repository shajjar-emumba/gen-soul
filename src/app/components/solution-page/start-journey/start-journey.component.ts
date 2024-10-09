import { Component, Input } from '@angular/core';
import { CallToActionComponent } from '../../call-to-action/call-to-action.component';
import { Solution } from '../../../model/interfaces';

@Component({
  selector: 'app-start-journey',
  standalone: true,
  imports: [CallToActionComponent],
  templateUrl: './start-journey.component.html',
  styleUrl: './start-journey.component.scss',
})
export class StartJourneyComponent {
  @Input() solutionContent: Solution | undefined;
  onTrySolutionNow() {
    console.log('clicked!');
  }
}
