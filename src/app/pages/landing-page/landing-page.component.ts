import { Component } from '@angular/core';
import { BannerComponent } from '../../components/landing-page/banner/banner.component';
import { SolutionsComponent } from '../../components/landing-page/solutions/solutions.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [BannerComponent, SolutionsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
