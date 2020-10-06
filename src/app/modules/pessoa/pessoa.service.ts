import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pessoa} from './pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  baseUrl = 'http://localhost:8080/pessoas';
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

  read(): Observable<Pessoa []> {
    return this.http.get<Pessoa []>(this.baseUrl);
  }

  deletePessoa(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  addPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.baseUrl, pessoa);
  }

  readById(id: string) {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Pessoa>(url);
  }

  updatePessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.put<Pessoa>(this.baseUrl, pessoa);
  }
}
