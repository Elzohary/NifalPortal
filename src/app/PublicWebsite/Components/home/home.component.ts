import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { IstickyCard } from '../../Models/isticky-card';
import { CardRightPicComponent } from '../card-right-pic/card-right-pic.component';
import { StickyCardComponent } from '../sticky-card/sticky-card.component';
import { CardLeftPicComponent } from '../card-left-pic/card-left-pic.component';
import { WhatWeProvideComponent } from '../what-we-provide/what-we-provide.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    CardRightPicComponent,
    StickyCardComponent,
    CardLeftPicComponent,
    WhatWeProvideComponent,
    ContactUsComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  cardDataArray : IstickyCard[] = [
    { cardNumber: 1, Title: 'Card 1', description: 'Description for Card 1', img:'../../../../../assets/card1.jpg' },
  ]

}
