import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { CallToActionComponent } from '../../call-to-action/call-to-action.component';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-user-details-form',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
    MatInput,
    CallToActionComponent,
    CallToActionComponent,
    NgClass,
  ],
  templateUrl: './user-details-form.component.html',
  styleUrl: './user-details-form.component.scss',
})
export class UserDetailsFormComponent {
  userForm: FormGroup;
  @Input() formConfig: any;
  @Output() formSubmitted = new EventEmitter();

  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      jobTitle: ['', Validators.required],
      company: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.userForm.valid) {
      this.formSubmitted.emit(this.userForm.value);
    }
  }
}
