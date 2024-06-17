import { ChangeDetectorRef, Component, TrackByFunction } from '@angular/core';
import { InputComponent } from '../../../components/input/input.component';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../components/button/button.component';
import { TextareaComponent } from '../../../components/textarea/textarea.component';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    InputComponent,
    CommonModule,
    FormsModule,
    ButtonComponent,
    TextareaComponent,
    ReactiveFormsModule,
    QuillModule,
  ],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  isSubmit: boolean = false;
  isShowContent: { [key: string]: boolean } = {
    header: true,
    name: true,
    about: true,
    experience: true,
  };

  experiencesArray = this.fb.array([
    this.fb.group({
      company: [''],
      position: [''],
      address: [''],
      period: [''],
      expDescription: [''],
    }),
  ]);

  formData = this.fb.group({
    phone: [null, [Validators.maxLength(14)]],
    email: ['', [Validators.email]],
    linkedIn: [''],
    portfolioURL: [''],
    address: [''],
    name: [''],
    about: [''],
    experiences: this.experiencesArray,
  });

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  constructor(private fb: FormBuilder, private cdr: ChangeDetectorRef) {}

  addExperience(): void {
    const newData = this.fb.group({
      company: [''],
      position: [''],
      address: [''],
      period: [''],
      expDescription: [''],
    });

    this.experiencesArray.push(newData);
    this.cdr.detectChanges();
  }

  onShowContent(section: string): void {
    if (this.isShowContent.hasOwnProperty(section)) {
      this.isShowContent[section] = !this.isShowContent[section];
    }
  }

  onSubmit(): void {
    this.isSubmit = true;
    if (this.formData.valid) {
      console.log(this.formData.value);
    } else {
      console.log('Form is invalid');
    }
  }

  updateFormControl(
    name: keyof FormComponent['formData']['controls'],
    value: any
  ): void {
    const control = this.formData.get(name);

    if (control instanceof FormArray) {
      control.setValue(value);
    } else {
      (this.formData.controls[name] as AbstractControl).setValue(value);
    }
  }

  get experiencesFormArray(): FormArray {
    return this.formData.get('experiences') as FormArray;
  }
}
