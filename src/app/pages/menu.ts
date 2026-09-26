import { Component, computed, signal, DestroyRef, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WEEKLY_SPECIALS, MENU_CATEGORIES, CAFE } from '../data/cafe.data';
import { lisbonWeekday } from '../shared/menu-clock';
import { Icon } from '../shared/icon';
import { TranslatePipe } from '../i18n/i18n';
@Component({selector: 'app-menu', imports: [CurrencyPipe, RouterLink, Icon, TranslatePipe], templateUrl: './menu.html', styleUrl: './menu.scss'})
export class Menu {
  readonly cafe = CAFE;
  readonly specials = WEEKLY_SPECIALS;
  readonly categories = MENU_CATEGORIES.filter(category => category.items.length > 0);
  readonly day = signal(lisbonWeekday());
  readonly today = computed(() => this.specials.find(dish => dish.day === this.day()));
  constructor() {
    // Atualiza também se o visitante mantiver a página aberta durante a noite.
    const timer = setInterval(() => this.day.set(lisbonWeekday()), 60_000);
    inject(DestroyRef).onDestroy(() => clearInterval(timer));
  }
}
