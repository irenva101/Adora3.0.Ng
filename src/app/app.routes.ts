import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IdentityLoginComponent } from './components/identity/identity-login/identity-login.component';
import { ProcessLoginComponent } from './components/identity/process-login/process-login.component';
import { HttpClientModule } from '@angular/common/http';
import { PublicLayoutComponent } from './components/layout/public-layout/public-layout.component';
import { AuthentificationLayoutComponent } from './components/layout/authentification-layout/authentification-layout.component';
import { PrivateLayoutComponent } from './components/layout/private-layout/private-layout.component';
import { AuthGuard } from './services/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: PublicLayoutComponent,
        children: [
            {
                path: "", 
                component: IdentityLoginComponent 
            },
            {
                path: "process-login", 
                component: ProcessLoginComponent 
            }
        ]
    },
    {
        path: '',
        component: PrivateLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: "home", 
                component: HomeComponent
            }
        ]
    }
];