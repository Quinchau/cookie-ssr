// ✅ src/app/app.routes.ts

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './services/AuthGuard';

export const routes: Routes = [
  { path: 'home',
    component: HomeComponent,
    canActivate: [authGuard]
},
  
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full'
},

    { path: 'login',
    component: LoginComponent
},
];
