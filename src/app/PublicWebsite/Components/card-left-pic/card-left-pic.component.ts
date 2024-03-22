import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FocusStickyCardsService } from '../../Services/focus-sticky-cards.service';

@Component({
  selector: 'app-card-left-pic',
  standalone: true,
  imports: [],
  templateUrl: './card-left-pic.component.html',
  styleUrl: './card-left-pic.component.scss'
})
export class CardLeftPicComponent {
  
  isSectionInView: boolean = false;

  @ViewChild('cardLeftSectoin', { static: false })
  cardLeftSectoin!: ElementRef;

  constructor(private isInViewService : FocusStickyCardsService) {}

  ngAfterViewInit(): void {
    this.checkIfSectionInView(); // Call the check method after view initialization
  }

  @HostListener('window:scroll', ['$event'])
  checkIfSectionInView(event?: Event): void {
    if (this.cardLeftSectoin) {
      const sectionRect = this.cardLeftSectoin.nativeElement.getBoundingClientRect();
      this.isInViewService.isSectionInView = sectionRect.top <= window.innerHeight && sectionRect.bottom >= 0;
      this.isInViewService.sharedData = sectionRect.top <= window.innerHeight && sectionRect.bottom >= 0; // obs


    }
  }
}
