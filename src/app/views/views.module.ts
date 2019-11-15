import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";


import { MatDialogModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule } from '@angular/material';


import { ViewsRoutes } from "./views.routing";

import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, ModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(ViewsRoutes)
  ],
  entryComponents: [
      ModalComponent
  ]
})
export class ViewsModule { }
