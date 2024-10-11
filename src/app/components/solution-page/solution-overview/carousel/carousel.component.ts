import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, MatIconButton, MatIcon],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  @Input() images: string[] = [];
  selectedIndex = 0;

  onNextImage() {
    if (this.images) {
      if (this.selectedIndex < this?.images.length - 1) {
        this.selectedIndex++;
      }
    }
  }

  onPreviousImage() {
    if (this.selectedIndex > 0) {
      this.selectedIndex--;
    }
  }
}
