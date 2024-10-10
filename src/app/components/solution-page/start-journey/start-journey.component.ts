import { Component, inject, Input } from '@angular/core';
import { CallToActionComponent } from '../../call-to-action/call-to-action.component';
import { Solution, UserDetails } from '../../../model/interfaces';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-start-journey',
  standalone: true,
  imports: [CallToActionComponent],
  templateUrl: './start-journey.component.html',
  styleUrl: './start-journey.component.scss',
})
export class StartJourneyComponent {
  @Input() solutionContent: Solution | undefined;
  dialog = inject(MatDialog);

  onTrySolutionNow() {
    console.log('clicked!');
  }

  onMakeItYours() {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        content: this.solutionContent,
        userFormConfig: {
          title: 'Make it your own',
          ctaText: 'Make it Your Own',
        },
      },
      maxWidth: '800px',
    });

    dialogRef.componentInstance.formSubmitted.subscribe(
      (formData: UserDetails) => {
        console.log('Make it yoru own  Data Received', formData);
        dialogRef.close();
      }
    );
  }
}
