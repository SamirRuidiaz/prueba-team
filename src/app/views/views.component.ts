import { Component, OnInit } from '@angular/core';

import { ViewsService } from "../shared/services/views/views.service";

@Component({
  selector: 'app-views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.scss'],
  providers:[
    ViewsService
  ]
})
export class ViewsComponent implements OnInit {

  constructor( private _viewsService:ViewsService ) { }

  ngOnInit() {
    this.cargarDatos()
  }

  cargarDatos(){
    this._viewsService.consultarDatos().subscribe(
        response => {

          console.log( response )
        },
        error => {
          console.log(error)
        },() => { }
    );
  }


}
