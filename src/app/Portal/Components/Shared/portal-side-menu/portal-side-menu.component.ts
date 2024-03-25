import { Component } from '@angular/core';
import { projectMenuItems } from '../../../Constants/menu-items';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { MatList, MatListItem } from '@angular/material/list';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-portal-side-menu',
  standalone: true,
  imports: [
    RouterModule,
    RouterLinkActive,
    MatList,
    MatListItem,
    MatIcon,
    MatDivider,
    DatePipe,
    MatChipsModule,
    MatTabsModule
  ],
  templateUrl: './portal-side-menu.component.html',
  styleUrl: './portal-side-menu.component.scss'
})
export class PortalSideMenuComponent {
  projectMenu = projectMenuItems;
}
