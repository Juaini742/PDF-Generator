import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormComponent } from '../form/form.component';
import { PreviewComponent } from '../preview/preview.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, FormComponent, PreviewComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
