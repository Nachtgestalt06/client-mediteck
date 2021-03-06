import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {URL_SERVICIOS} from '../../config/config';
import {map} from 'rxjs/operators';

@Injectable()
export class ConsultationService {

  urlConsultation = `${URL_SERVICIOS}/consultas`;

  constructor(private http: HttpClient) {
  }

  getConsultations() {
    const url = `${this.urlConsultation}?centro=${localStorage.getItem('idMedicalCenter')}`;
    // headers = headers.append('Authorization', this.token);
    return this.http.get(url);
  }

  getConsultation(id) {
    const url = `${URL_SERVICIOS}/consultas-paciente/${id}`;
    return this.http.get(url);
  }

  postConsultation(consultation) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    const body = JSON.stringify(consultation);
    return this.http.post(this.urlConsultation, body, {headers, responseType: 'blob'}).pipe(
      map(res => {
        return new Blob([res], {type: 'application/pdf'});
      })
    );
  }

  printFile(data, type) {
    const url = `${URL_SERVICIOS}/getConsulta/${type}`;
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(url, data, {headers, responseType: 'blob'}).pipe(
      map((res: any) => {
        return new Blob([res], {type: 'application/pdf'});
      })
    );
  }

  getRecipe(id) {
    const url = `${URL_SERVICIOS}/getConsulta/${id}`;
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.get(url, {headers, responseType: 'blob'}).pipe(
      map(res => {
        return new Blob([res], {type: 'application/pdf'});
      })
    );
  }

  putConsultation(id, doctor) {
    const url = `${this.urlConsultation}/${id}`;
    const body = JSON.stringify(doctor);
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    return this.http.put(url, body, {headers});
  }

  deleteConsultation(id) {
    const url = `${this.urlConsultation}/${id}`;
    return this.http.delete(url);
  }
}
