import { Routes, RouterModule } from '@angular/router';
import { PublicWebsiteComponent } from './PublicWebsite/Components/public-website/public-website.component';
import { LoginComponent } from './Authentication/Components/login/login.component';
import { PortalMasterViewComponent } from './Portal/Components/Shared/portal-master-view/portal-master-view.component';
import { woOverviewComponent } from './Portal/Components/WorkOrders/wo-overview/wo-overview.component';
import { WOAllComponent } from './Portal/Components/WorkOrders/wo-all/wo-all.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: PublicWebsiteComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'portal', component: PortalMasterViewComponent, children: [
        { path:'overview', component: woOverviewComponent, pathMatch: 'full' },
        
    ]},
    

];


/* { path:'workorders', component: WOAllComponent, pathMatch: 'full' }, */