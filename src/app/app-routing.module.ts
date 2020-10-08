import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from './layouts/default/default.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {PostsComponent} from './modules/posts/posts.component';
import {ServiceComponent} from './modules/service/service.component';
import {CreateServiceComponent} from './modules/service/create-service/create-service.component';
import {DetailsServiceComponent} from './modules/service/details-service/details-service.component';
import {PessoaComponent} from './modules/pessoa/pessoa.component';
import {CreatePessoaComponent} from './modules/pessoa/create-pessoa/create-pessoa.component';
import {DetailsPessoaComponent} from './modules/pessoa/details-pessoa/details-pessoa.component';


const routes: Routes = [{
    path: '',
    component: DefaultComponent,
    children: [{
      path: '',
      component: DashboardComponent
    }, {
      path: 'posts',
      component: PostsComponent
    }, {
      path: 'service',
      component: ServiceComponent
    }, {
      path: 'service/create',
      component: CreateServiceComponent
    }, {
      path: 'service/update/:idService',
      component: DetailsServiceComponent
    }, {
      path: 'pessoa',
      component: PessoaComponent
    }, {
      path: 'pessoa/create',
      component: CreatePessoaComponent
    }, {
      path: 'pessoa/update/:idPessoa',
      component: DetailsPessoaComponent
    }]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
