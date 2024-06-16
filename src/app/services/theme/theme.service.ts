import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: string = 'light';

  constructor() {
    const storedTheme = document.documentElement.getAttribute('data-theme');
    if (storedTheme) {
      this.currentTheme = storedTheme;
    }
  }

  setTheme(theme: string) {
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
  }

  getTheme(): string {
    return this.currentTheme;
  }
}
