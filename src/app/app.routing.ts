import { Routes } from '@angular/router';
import { ViewsComponent } from "./views/views.component";

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: '/views/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: ViewsComponent,
    children: [
       {
          path: 'views',
          loadChildren: './views/views.module#ViewsModule',
          data: { title: '', breadcrumb: ''}
       }

    ]
 },
]
