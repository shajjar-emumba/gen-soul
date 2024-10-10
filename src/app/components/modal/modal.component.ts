import { Component, EventEmitter, Inject, Output } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { UserDetailsFormComponent } from './user-details-form/user-details-form.component';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { SolutionContentComponent } from './solution-content/solution-content.component';
import { FormConfig, Solution, UserDetails } from '../../model/interfaces';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    UserDetailsFormComponent,
    MatIcon,
    MatIconButton,
    MatDialogContent,
    SolutionContentComponent,
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Output() formSubmitted = new EventEmitter();

  constructor(
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { content: Solution | null; userFormConfig: FormConfig }
  ) {}

  onFormSubmitted(formData: UserDetails) {
    this.formSubmitted.emit(formData);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
