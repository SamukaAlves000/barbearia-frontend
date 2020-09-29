import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from '../../modules/dashboard/dashboard.component';
import {PostsComponent} from '../../modules/posts/posts.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {DefaultComponent} from './default.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {DashboardService} from '../../modules/dashboard.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ServiceComponent} from '../../modules/service/service.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {ServiceModule} from '../../modules/service/service.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    ServiceComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule


  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
