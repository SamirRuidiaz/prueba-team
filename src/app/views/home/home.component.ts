import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';

import { Validators, FormGroup, FormControl } from '@angular/forms';

import { ViewsService } from "../../shared/services/views/views.service";
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[
    ViewsService
  ]
})
export class HomeComponent implements OnInit {

  public arrayPaises:any = [];
  public arrayAsia:any = [];
  public arrayAmerica:any = [];
  public arrayAfrica:any = [];
  public arrayEuropa:any = [];
  public arrayOceania:any = [];
  public arrayBusqueda:any = [];

  forgotForm: FormGroup;
  cargarForgotForm: Object;

  constructor( private _viewsService:ViewsService, private dialog: MatDialog ) { }

  ngOnInit() {

    const busqueda = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]);

    this.forgotForm = new FormGroup({
      busqueda: busqueda
   });

   this.cargarForgotForm = {
      'busqueda': 	  ''
   };

    this.cargarDatos()
  }

  cargarDatos(){
    this._viewsService.consultarDatos().subscribe(
        response => {
          this.arrayPaises = response
          this.arrayAfrica = this.arrayPaises.filter( (pais) => pais.region == 'Africa'  )
          this.arrayAmerica = this.arrayPaises.filter( (pais) => pais.region == 'Americas'  )
          this.arrayAsia = this.arrayPaises.filter( (pais) => pais.region == 'Asia'  )
          this.arrayEuropa = this.arrayPaises.filter( (pais) => pais.region == 'Europe'  )
          this.arrayOceania = this.arrayPaises.filter( (pais) => pais.region == 'Oceania'  )
          // console.log( this.arrayPaises )
        },
        error => {
          console.log(error)
        },() => { }
    );
  }

  detallePais(pais) {
    let dialogRef: MatDialogRef<any> = this.dialog.open(ModalComponent, {
        width: '60%',
        disableClose: false,
        data: { payload: pais }
    })
    dialogRef.afterClosed()
        .subscribe(res => {
          if(!res) {
              // If user press cancel
              return;
          }
    });
  }

  onSubmitforgot() {
    this.arrayBusqueda = this.arrayPaises.filter((pais) => {
      if (pais.name.toLowerCase() == this.forgotForm.controls['busqueda'].value.toLowerCase()) {
        return pais
      }
    })
  }

  clearsearch() {
    this.arrayBusqueda = []
    this.forgotForm.patchValue(this.cargarForgotForm);
  }

}
