import { Component, inject, Input } from '@angular/core';
import { Solution, UserDetails } from '../../../../model/interfaces';
import { NgStyle } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../../modal/modal.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() solution!: Solution;
  router = inject(Router);
  dialog = inject(MatDialog);

  onCardClick() {
    console.log(
      'Open from if user is not registerd other wise redirect to details page'
    );

    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        content: null,
        userFormConfig: {
          title: 'Unlock The app Details',
          ctaText: 'Unlock',
        },
      },
      maxWidth: '840px',
    });

    dialogRef.componentInstance.formSubmitted.subscribe(
      (formData: UserDetails) => {
        console.log('User Registration Data Received', formData);
        dialogRef.close();
        this.router.navigate(['solution', this.solution.path]);
      }
    );
  }
}
