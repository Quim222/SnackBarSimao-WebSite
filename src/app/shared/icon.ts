import { Component, input } from '@angular/core';
export type IconName = 'coffee' | 'pin' | 'clock' | 'arrow' | 'menu' | 'close' | 'plate';
@Component({
  selector: 'app-icon',
  template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
    @switch (name()) {
      @case ('coffee') { <path d="M4 9h12v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5Z"/><path d="M16 10h2a3 3 0 0 1 0 6h-2M2 22h18M7 2c-2 2 2 2 0 4M12 1c-2 2 2 3 0 5"/> }
      @case ('pin') { <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/> }
      @case ('clock') { <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/> }
      @case ('arrow') { <path d="M4 12h16m-6-6 6 6-6 6"/> }
      @case ('menu') { <path d="M4 6h16M4 12h16M4 18h16"/> }
      @case ('close') { <path d="m6 6 12 12M6 18 18 6"/> }
      @case ('plate') { <circle cx="13" cy="12" r="7"/><path d="M2 3v6m3-6v6M2 7h3M3.5 9v12M22 3v18"/> }
    }
  </svg>`,
  styles: [':host{display:inline-flex;width:1.5rem;height:1.5rem;flex-shrink:0}svg{width:100%;height:100%}']
})
export class Icon { name = input<IconName>('arrow'); }
