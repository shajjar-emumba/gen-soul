import { Component, inject } from '@angular/core';
import { SolutionOverviewComponent } from '../../components/solution-page/solution-overview/solution-overview.component';
import { StartJourneyComponent } from '../../components/solution-page/start-journey/start-journey.component';
import { ActivatedRoute } from '@angular/router';
import { SOLUTIONS_DATA } from '../../model/dummy-content';
import { Solution } from '../../model/interfaces';
import { BreadCrumbComponent } from '../../components/bread-crumb/bread-crumb.component';

@Component({
  selector: 'app-solutions-page',
  standalone: true,
  imports: [
    SolutionOverviewComponent,
    StartJourneyComponent,
    BreadCrumbComponent,
  ],
  templateUrl: './solutions-page.component.html',
  styleUrl: './solutions-page.component.scss',
})
export class SolutionsPageComponent {
  selectedSolution: Solution | undefined;

  private activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.loadSolution();
  }

  private loadSolution(): void {
    const solutionPath = this.activatedRoute.snapshot.paramMap.get('path');
    if (solutionPath) {
      this.selectedSolution = SOLUTIONS_DATA.find(
        (solution) => solution.path === solutionPath
      );
    }
  }
}
