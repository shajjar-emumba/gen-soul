import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Solution } from '../../../model/interfaces';

@Component({
  selector: 'app-solution-content',
  standalone: true,
  imports: [MatIcon, NgStyle],
  templateUrl: './solution-content.component.html',
  styleUrl: './solution-content.component.scss',
})
export class SolutionContentComponent {
  @Input() solutionDetails!: Solution;
}
