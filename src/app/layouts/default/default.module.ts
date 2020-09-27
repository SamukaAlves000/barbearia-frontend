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

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule

  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
