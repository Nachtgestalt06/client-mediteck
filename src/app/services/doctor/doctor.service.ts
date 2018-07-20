import { Injectable } from '@angular/core';
import {URL_SERVICIOS} from '../../config/config';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Params} from '@angular/router';

@Injectable()
export class DoctorService {

  token = localStorage.getItem('token');

  urlDoctor = `${URL_SERVICIOS}/medicos`;

  constructor(private http: HttpClient) {}

  getDoctors() {
    const url = `${this.urlDoctor}?centro=${localStorage.getItem('idMedicalCenter')}`;
    let headers: HttpHeaders = new HttpHeaders();
    // headers = headers.append('Authorization', this.token);
    return this.http.get(url);
  }

  getDoctor(id) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', this.token);
    const url = `${this.urlDoctor}/${id}`;
    return this.http.get(url,{headers});
  }

  postDoctor(doctor) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', this.token);
    headers = headers.append('Content-Type', 'application/json');
    const body = JSON.stringify(doctor);
    return this.http.post(this.urlDoctor, body, {headers});
  }

  putDoctor(id, doctor) {
    const url = `${this.urlDoctor}/${id}`;
    const body = JSON.stringify(doctor);
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', this.token);
    headers = headers.append('Content-Type', 'application/json');
    return this.http.put(url, body,{headers});
  }

  deleteDoctor(id) {
    const url = `${this.urlDoctor}/${id}`;
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', this.token);
    return this.http.delete(url,{headers});
  }

}
