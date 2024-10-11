import { Component, inject, Input } from '@angular/core';
import { CallToActionComponent } from '../../call-to-action/call-to-action.component';
import { Solution, UserDetails } from '../../../model/interfaces';
import { NgStyle } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../modal/modal.component';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'app-solution-overview',
  standalone: true,
  imports: [
    CallToActionComponent,
    CallToActionComponent,
    NgStyle,
    CarouselComponent,
  ],
  templateUrl: './solution-overview.component.html',
  styleUrl: './solution-overview.component.scss',
})
export class SolutionOverviewComponent {
  @Input() solutionContent: Solution | undefined;
  dialog = inject(MatDialog);

  onContactUs() {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        content: null,
        userFormConfig: {
          title: 'Contact Us',
          ctaText: 'Submit',
        },
      },
      maxWidth: '800px',
    });

    dialogRef.componentInstance.formSubmitted.subscribe(
      (formData: UserDetails) => {
        console.log('User Contact US Data Received', formData);
        dialogRef.close();
      }
    );
  }
}
