import { Component, input, signal, computed } from '@angular/core';
import { CafePhoto } from '../data/cafe.data';
import { Icon } from './icon';
import { TranslatePipe } from '../i18n/i18n';
@Component({
 selector: 'app-gallery', imports: [Icon, TranslatePipe],
 template: `@if (photos().length) {
 <section class="gallery" aria-label="Fotografias do café" aria-roledescription="carrossel">
  <div class="photo" tabindex="0" aria-label="Fotografia do café. Use as setas do teclado para navegar." (keydown.arrowright)="move(1); $event.preventDefault()" (keydown.arrowleft)="move(-1); $event.preventDefault()" (pointerdown)="start($event)" (pointerup)="end($event)" (pointercancel)="cancel()">
   <img [src]="current().src" [alt]="current().alt" width="1200" height="700" loading="lazy" draggable="false">
  </div>
  <div class="gallery-bottom"><div aria-live="polite" aria-atomic="true"><strong>{{ current().caption }}</strong><span>{{ index() + 1 }} / {{ photos().length }}</span></div>
   @if (photos().length > 1) {<div class="gallery-controls"><button type="button" [attr.aria-label]="'menu.previous' | t" (click)="move(-1)"><app-icon class="back" name="arrow"/></button><button type="button" [attr.aria-label]="'menu.nextPhoto' | t" (click)="move(1)"><app-icon name="arrow"/></button></div>}
  </div>
  @if(photos().length > 1){<div class="thumbnails" aria-label="Escolher fotografia">@for(photo of photos(); track photo.src; let i = $index){<button type="button" [class.selected]="index() === i" [attr.aria-label]="('menu.viewPhoto' | t) + photo.caption" [attr.aria-pressed]="index() === i" (click)="index.set(i)"><img [src]="photo.src" alt="" loading="lazy" width="120" height="80" draggable="false"></button>}</div>}
 </section>
 }`,
 styles: [`.photo{aspect-ratio:12/7;overflow:hidden;border-radius:10px;background:var(--tint);touch-action:pan-y;cursor:grab}.photo:active{cursor:grabbing}.photo img{width:100%;height:100%;object-fit:cover;user-select:none;display:block}.gallery-bottom{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1rem 0}.gallery-bottom strong{font-weight:600}.gallery-bottom span{display:block;font-size:.85rem;color:var(--muted)}.gallery-controls{display:flex;gap:.6rem}button{background:var(--white);border:1px solid var(--line);border-radius:8px;cursor:pointer;color:var(--red)}.gallery-controls button{display:grid;place-items:center;width:48px;height:48px}.back{transform:rotate(180deg)}.thumbnails{display:flex;gap:.65rem;overflow-x:auto;padding:.4rem}.thumbnails button{padding:3px;flex:0 0 110px;height:78px}.thumbnails img{width:100%;height:100%;object-fit:cover;border-radius:4px;display:block}.thumbnails .selected{outline:2px solid var(--red);outline-offset:1px}@media(max-width:650px){.photo{aspect-ratio:4/3}.gallery-bottom strong{font-size:.95rem}}`]
})
export class Gallery {
 readonly photos = input.required<CafePhoto[]>();
 readonly index = signal(0);
 readonly current = computed(() => this.photos()[this.index() % this.photos().length]);
 private origin: { x: number; y: number; id: number } | null = null;
 move(delta: number) { const count = this.photos().length; if (count) this.index.update(i => (i + delta + count) % count); }
 start(event: PointerEvent) { if (event.button !== 0) return; this.origin = { x: event.clientX, y: event.clientY, id: event.pointerId }; (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId); }
 end(event: PointerEvent) { const origin = this.origin; this.origin = null; if (!origin || origin.id !== event.pointerId) return; const x = event.clientX - origin.x; const y = event.clientY - origin.y; if (Math.abs(x) > 45 && Math.abs(x) > Math.abs(y)) this.move(x < 0 ? 1 : -1); }
 cancel() { this.origin = null; }
}
