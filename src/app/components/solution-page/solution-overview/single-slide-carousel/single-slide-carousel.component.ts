import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-single-slide-carousel',
  standalone: true,
  imports: [CommonModule, MatIcon, MatIconButton],
  templateUrl: './single-slide-carousel.component.html',
  styleUrls: ['./single-slide-carousel.component.scss'],
})
export class SingleSlideCarouselComponent {
  @Input() images: string[] = [];

  currentIndex: number = 0;
  @ViewChild('carouselSlide') carouselSlide!: ElementRef;

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1;
    }
    this.slide();
  }

  nextSlide() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.slide();
  }

  slide() {
    const slideWidth = this.carouselSlide.nativeElement.offsetWidth;
    this.carouselSlide.nativeElement.style.transform = `translateX(-${
      this.currentIndex * slideWidth
    }px)`;
  }
}
