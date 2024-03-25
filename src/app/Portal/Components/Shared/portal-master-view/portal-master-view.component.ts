import { Component } from '@angular/core';
import { MatDrawer, MatDrawerContainer, MatDrawerContent } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { PortalHeaderComponent } from '../portal-header/portal-header.component';
import { PortalSideMenuComponent } from '../portal-side-menu/portal-side-menu.component';

@Component({
  selector: 'app-portal-master-view',
  standalone: true,
  imports: [
    MatDrawer,
    MatDrawerContainer,
    MatDrawerContent,
    RouterModule,
    PortalHeaderComponent,
    PortalSideMenuComponent
  ],
  templateUrl: './portal-master-view.component.html',
  styleUrl: './portal-master-view.component.scss'
})
export class PortalMasterViewComponent {

}
