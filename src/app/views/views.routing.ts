import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const ViewsRoutes: Routes = [
  {
     path: 'home',
     component: HomeComponent,
     data: { title: 'Home', breadcrumb: 'Home' }
  }
]
