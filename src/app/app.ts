import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Brand } from './shared/brand';
import { Icon } from './shared/icon';
import { I18nService, TranslatePipe } from './i18n/i18n';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Brand, Icon, TranslatePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly menuOpen = signal(false);
  readonly year = new Date().getFullYear();
  constructor(readonly i18n: I18nService) {}
  toggleLanguage() {
    this.i18n.setLanguage(this.i18n.language() === 'pt' ? 'en' : 'pt');
  }
}
