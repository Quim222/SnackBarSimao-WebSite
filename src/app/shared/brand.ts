import { Component } from '@angular/core';
import { Icon } from './icon';
@Component({
  selector: 'app-brand',
  imports: [Icon],
  template: `<app-icon name="coffee" /><span
      ><span class="brand-kicker">SNACK BAR</span><strong>SIMÃO</strong></span
    >`,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        color: var(--ink);
        line-height: 1;
      }
      app-icon {
        color: var(--red);
        width: 2.6rem;
        height: 2.6rem;
      }
      .brand-kicker {
        display: block;
        font-size: 0.72rem;
        letter-spacing: 0.1em;
        font-weight: 700;
        margin-bottom: 0.25rem;
      }
      strong {
        font-size: 1.65rem;
        letter-spacing: -0.055em;
      }
    `,
  ],
})
export class Brand {}
