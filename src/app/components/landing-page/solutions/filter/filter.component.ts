import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatOption } from '@angular/material/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelect } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { NgStyle } from '@angular/common';
import { KEYWORDS } from '../../../../model/dummy-content';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    MatIconModule,
    MatFormField,
    MatOption,
    MatSelect,
    MatLabel,
    MatCheckbox,
    MatIconButton,
    MatMenuModule,
    NgStyle,
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  keywords = KEYWORDS;
  selectedKeywords: string[] = [];
  @Output() keywordsChanged = new EventEmitter<string[]>();

  onKeywordChange(keyword: string, event: any) {
    if (event.checked) {
      this.selectedKeywords.push(keyword);
    } else {
      this.selectedKeywords = this.selectedKeywords.filter(
        (item) => item !== keyword
      );
    }

    this.keywordsChanged.emit(this.selectedKeywords);
  }

  onRemoveKeyword(keyword: string) {
    this.selectedKeywords = this.selectedKeywords.filter(
      (item) => item !== keyword
    );
    this.keywordsChanged.emit(this.selectedKeywords);
  }

  onClearAllFilters() {
    this.selectedKeywords = [];
    this.keywordsChanged.emit(this.selectedKeywords);
  }

  isKeywordSelected(keyword: string) {
    return this.selectedKeywords.includes(keyword);
  }
}
