import { Injectable } from '@angular/core';
import { ApiService } from "../api.service";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ViewsService {

  public token: any;

  constructor(private _apiService: ApiService) {
    this.token = localStorage.getItem('token');
  }

  public consultarDatos() {
    return this._apiService.getMethod(environment.portComposite, '', this.token);
  }
}
