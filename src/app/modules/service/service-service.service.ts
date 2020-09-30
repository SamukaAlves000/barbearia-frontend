import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Service} from './service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceServiceService {

  baseUrl = 'http://10.0.0.103:8080/servicos';
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

  read(): Observable<Service []> {
    return this.http.get<Service []>(this.baseUrl);
  }

}
