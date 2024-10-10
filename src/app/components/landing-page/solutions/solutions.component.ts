import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import { SOLUTIONS_DATA } from '../../../model/dummy-content';
import { Solution } from '../../../model/interfaces';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CardComponent, FilterComponent],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss',
})
export class SolutionsComponent {
  filteredSolutions: Solution[] = SOLUTIONS_DATA;

  onKeywordsChanged(selectedKeywords: string[]) {
    if (selectedKeywords.length === 0) {
      this.filteredSolutions = SOLUTIONS_DATA;
    } else {
      this.filteredSolutions = SOLUTIONS_DATA.filter((solution) =>
        selectedKeywords.every((keyword) => solution.tags.includes(keyword))
      );
    }
  }
}
