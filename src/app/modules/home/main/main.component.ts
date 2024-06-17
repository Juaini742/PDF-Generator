import { Component } from '@angular/core';
import { HeroComponent } from '../../../moculed/home/hero/hero.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
