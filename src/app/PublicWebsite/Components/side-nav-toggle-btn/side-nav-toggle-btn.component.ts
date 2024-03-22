import { Component } from '@angular/core';
import { HeaderService } from '../../Services/header.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-side-nav-toggle-btn',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './side-nav-toggle-btn.component.html',
  styleUrl: './side-nav-toggle-btn.component.scss'
})
export class SideNavToggleBtnComponent {

  constructor(private headerService : HeaderService) {}

  toggleSideNav() {
    if (this.headerService.getIsSideNavValue() == true) {
      this.headerService.setIsSideNavFalse();
    }
    this.headerService.toggleSideNav();
  }
}
