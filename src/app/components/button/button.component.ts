import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() class: string = '';
  @Input() label: string = '';
  @Output() click = new EventEmitter<void>();
  @Input() disabled: boolean = false;

  handleClick() {
    if (!this.disabled) {
      console.log('Button clicked');
      this.click.emit();
    }
  }
}
