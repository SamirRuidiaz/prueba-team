import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
//import { map } from "rxjs/operators";
import 'rxjs/add/operator/catch';
import { Observable, of } from 'rxjs';


import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private dominio: string;

  constructor(private _http: HttpClient) {
    this.dominio = environment.apiURL;
  }

  public postMethod(params, puerto, endpoint ,_token) {
    let urlOperation = this.dominio+puerto+endpoint;
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    if (_token != null) {
        headers.append('Authorization', 'jwt ' + _token);
    }
    return this._http.post(urlOperation, params, {headers: headers}).map(res => res );
  }

  public optionsMethod(puerto, endpoint, _token) {
    let urlOperation = this.dominio+puerto+endpoint;
    let paramsUrl = new URLSearchParams();
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    if (_token != null) {
        headers.append('Authorization', 'jwt ' + _token);
    }
    return this._http.options(urlOperation, {headers: headers}).map(res => res);
  }

  public getMethod(puerto, endpoint, _token) {
    let urlOperation = this.dominio+puerto+endpoint;
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    if (_token != null) {
        headers.append('Authorization', 'jwt ' + _token);
    }
    return this._http.get(urlOperation, {headers: headers}).map(res => res);
  }

  public putMethod(params, puerto, endpoint, _token) {
    let urlOperation = this.dominio+puerto+endpoint;
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    if (_token != null) {
        headers.append('Authorization', 'jwt ' + _token);
    }
    return this._http.put(urlOperation, params, {headers: headers}).map(res => res);
  }

  public patchMethod(params, puerto, endpoint, _token) {
    let urlOperation = this.dominio+puerto+endpoint;
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    if (_token != null) {
        headers.append('Authorization', 'jwt ' + _token);
    }
    return this._http.patch(urlOperation, params, {headers: headers}).map(res => res);
  }

  public deleteMethod(puerto, endpoint, _token) {
    let urlOperation = this.dominio+puerto+endpoint;
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    if (_token != null) {
        headers.append('Authorization', 'jwt ' + _token);
    }
    return this._http.delete(urlOperation, {headers: headers}).map(res => res);
  }

}