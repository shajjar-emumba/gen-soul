import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-bread-crumb',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIcon, RouterLink, TitleCasePipe],
  templateUrl: './bread-crumb.component.html',
  styleUrl: './bread-crumb.component.scss',
})
export class BreadCrumbComponent {
  activatedRoute = inject(ActivatedRoute);
  activeSolution = '';

  ngOnInit() {
    const solutionPath = this.activatedRoute.snapshot.paramMap.get('path');
    if (solutionPath) {
      this.activeSolution = this.removeHyphens(solutionPath);
    }
  }

  private removeHyphens(path: string) {
    return path.split('-').join(' ');
  }
}
