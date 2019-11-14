import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ViewsComponent } from './views.component';



@NgModule({
  declarations: [HomeComponent, ViewsComponent],
  imports: [
    CommonModule
  ]
})
export class ViewsModule { }
