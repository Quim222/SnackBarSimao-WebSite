import { Component } from '@angular/core';
import { CAFE } from '../data/cafe.data';
import { TranslatePipe } from '../i18n/i18n';
import { Icon } from './icon';
@Component({
  selector: 'app-contact', imports: [Icon, TranslatePipe],
  template: `<section id="contactos" class="contact section" aria-labelledby="contact-title">
    <div class="container contact-grid">
      <div><p class="eyebrow">{{ 'home.contactEyebrow' | t }}</p><h2 id="contact-title">{{ ('home.contactTitle' | t).replace('|', '\n') }}</h2>
      <p>{{ 'home.contactDesc' | t }}</p>
      @if (cafe.mapsUrl) { <a class="button primary" [href]="cafe.mapsUrl" target="_blank" rel="noopener noreferrer"><app-icon name="pin"/>{{ 'home.where' | t }}</a> }
      </div>
      <div class="contact-details">
        <div><app-icon name="pin"/><div><h3>{{ 'home.where' | t }}</h3><p>{{ cafe.address || ('home.locationSoon' | t) }}</p></div></div>
        <div><app-icon name="clock"/><div><h3>{{ 'home.hours' | t }}</h3>@for (hour of cafe.hours; track hour.days) {<p>{{ hour.days }} · {{ hour.time }}</p>} @empty {<p>{{ 'home.hoursSoon' | t }}</p>}</div></div>
        @if (cafe.phone) {<div><app-icon name="coffee"/><div><h3>{{ 'nav.contact' | t }}</h3><a [href]="'tel:' + cafe.phone">{{ cafe.phone }}</a></div></div>}
      </div>
    </div>
  </section>`,
  styles: [`.contact{background:var(--tint);border-top:1px solid var(--line)}.contact-grid{display:grid;grid-template-columns:1.2fr 1fr;gap:5rem}.contact-details{padding-top:1rem}.contact-details>div{display:flex;gap:1rem;padding:1.3rem 0;border-bottom:1px solid var(--line)}app-icon{color:var(--red)}h3{font-family:var(--font-body);font-size:1rem;margin:0 0 .35rem}p{margin:.5rem 0 1.5rem}.contact-details p{margin:.2rem 0}.button{margin-top:.5rem}@media(max-width:700px){.contact-grid{grid-template-columns:1fr;gap:1.5rem}}`]
})
export class Contact { readonly cafe = CAFE; }
