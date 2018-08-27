
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MatComponentsComponent } from './mat-components/mat-components.component';
import { TableComponent } from './table/table.component';
import { FlexLayoutComponent } from './flex-layout/flex-layout.component';
import { LoginRequiredComponent } from './login-required/login-required.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'login-required', component: LoginRequiredComponent, canActivate: [AuthGuard], runGuardsAndResolvers: 'always' },
    { path: 'components', component: MatComponentsComponent },
    { path: 'home', component: HomeComponent },
    { path: 'table', component: TableComponent },
    { path: 'flex-layout', component: FlexLayoutComponent },
    { path: '**', component: HomeComponent }
];

export const routing = RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' });
