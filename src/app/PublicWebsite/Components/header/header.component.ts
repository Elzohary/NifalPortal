import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { SideNavToggleBtnComponent } from '../side-nav-toggle-btn/side-nav-toggle-btn.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatSlideToggleModule,
    MatButtonModule,
    SideNavToggleBtnComponent,
    MatToolbarModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
