import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card-left-pic',
  standalone: true,
  imports: [],
  templateUrl: './card-left-pic.component.html',
  styleUrls: ['./card-left-pic.component.scss']
})
export class CardLeftPicComponent {
  
  isSectionInView: boolean = false;

  @ViewChild('cardLeftSectoin', { static: false })
  cardLeftSectoin!: ElementRef;

  constructor() {}

}
