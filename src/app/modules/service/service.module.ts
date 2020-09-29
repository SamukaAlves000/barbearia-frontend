import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateServiceComponent} from './create-service/create-service.component';
import {DetailsServiceComponent} from './details-service/details-service.component';
import {ListServiceComponent} from './list-service/list-service.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {ServiceServiceService} from './service-service.service';


@NgModule({
  declarations: [
    CreateServiceComponent,
    DetailsServiceComponent,
    ListServiceComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [
    ServiceServiceService
  ]
})
export class ServiceModule { }
