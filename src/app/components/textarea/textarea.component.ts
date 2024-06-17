import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.css',
})
export class TextareaComponent {
  @Input() class: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() value: string = '';
  @Input() rows: string = '';
  @Input() cols: string = '';
}
