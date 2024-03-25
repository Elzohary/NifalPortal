import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../Services/header.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-public-website',
  standalone: true,
  imports: [
    MatSidenavModule,
    HomeComponent,
    RouterModule
  ],
  templateUrl: './public-website.component.html',
  styleUrl: './public-website.component.scss'
})
export class PublicWebsiteComponent implements OnInit {
  isSideNavOpen = false;

  constructor(private headerService: HeaderService) {
  }

  ngOnInit() {
    this.headerService.getSideNavState().subscribe((isOpen) => {
      this.isSideNavOpen = isOpen;
    });
  }


}
