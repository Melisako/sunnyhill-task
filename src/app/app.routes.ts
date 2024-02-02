import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductsComponent } from './pages/products/products.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'homepage',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomepageComponent
      },
     
    ]
  },

  {
    path: 'products',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/products/products.module').then((m) => m.ProductsModule),
      }
   
    
    ]
  }
];
