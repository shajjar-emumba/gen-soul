import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'solution/:path',
    loadComponent: () =>
      import('./pages/solutions-page/solutions-page.component').then(
        (c) => c.SolutionsPageComponent
      ),
  },
];
