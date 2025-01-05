import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isDark: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {
  }

  switchMode(isDarkMode: boolean): void {
    const hostClass = isDarkMode ? 'app-theme-dark' : 'app-theme-light';
    this.isDark = isDarkMode;
    this.renderer.setAttribute(this.document.body, 'class', hostClass);
  }
}
