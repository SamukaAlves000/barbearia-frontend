import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Servico} from './service.model';


@Injectable({
  providedIn: 'root'
})
export class ServiceServiceService {

  baseUrl = 'http://localhost:8080/servicos';
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
        panelClass: ['blue-snackbar']
      }
    );
  }

  read(): Observable<Servico []> {
    return this.http.get<Servico []>(this.baseUrl);
  }

  deleteServico(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  addServico(servico: Servico): Observable<Servico> {
    return this.http.post<Servico>(this.baseUrl, servico);
  }

  readById(id: string) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Servico>(url);
  }

  updateServico(servico: Servico): Observable<Servico> {
    return this.http.put<Servico>(this.baseUrl, servico);
  }
}
