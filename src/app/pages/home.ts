import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CAFE, WEEKLY_SPECIALS, GALLERY_PHOTOS } from '../data/cafe.data';
import { Icon } from '../shared/icon';
import { Gallery } from '../shared/gallery';
import { TranslatePipe } from '../i18n/i18n';
import { Contact } from '../shared/contact';
@Component({
  selector: 'app-home', imports: [RouterLink, Icon, Contact, Gallery, TranslatePipe],
  templateUrl: './home.html', styleUrl: './home.scss'
})
export class Home { readonly cafe = CAFE; readonly photos = GALLERY_PHOTOS; readonly specials = WEEKLY_SPECIALS; }
