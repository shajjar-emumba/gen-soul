import { Component, Input } from '@angular/core';
import { CallToActionComponent } from '../../call-to-action/call-to-action.component';
import { Solution } from '../../../model/interfaces';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-solution-overview',
  standalone: true,
  imports: [CallToActionComponent, CallToActionComponent, NgStyle],
  templateUrl: './solution-overview.component.html',
  styleUrl: './solution-overview.component.scss',
})
export class SolutionOverviewComponent {
  @Input() solutionContent: Solution | undefined;
}
