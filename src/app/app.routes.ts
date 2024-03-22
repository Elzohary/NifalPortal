import { Routes } from '@angular/router';
import { PublicWebsiteComponent } from './PublicWebsite/Components/public-website/public-website.component';

export const routes: Routes = [
    { path: 'home', component: PublicWebsiteComponent, pathMatch: 'full' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
