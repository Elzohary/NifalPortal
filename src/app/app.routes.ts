import { Routes } from '@angular/router';
import { PublicWebsiteComponent } from './PublicWebsite/Components/public-website/public-website.component';
import { LoginComponent } from './Authentication/Components/login/login.component';
import { PortalMasterViewComponent } from './Portal/Components/Shared/portal-master-view/portal-master-view.component';
import { ProjectsOverviewComponent } from './Portal/Components/Projects/projects-overview/projects-overview.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: PublicWebsiteComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'portal', component: PortalMasterViewComponent, children: [
        { path:'overview', component: ProjectsOverviewComponent, pathMatch: 'full' },
    ] },
];