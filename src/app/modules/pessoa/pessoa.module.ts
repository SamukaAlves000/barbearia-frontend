import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CreatePessoaComponent } from './create-pessoa/create-pessoa.component';
import { ListPessoaComponent } from './list-pessoa/list-pessoa.component';
import { DetailsPessoaComponent } from './details-pessoa/details-pessoa.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { MatRadioModule} from '@angular/material/radio';



@NgModule({
  declarations: [
    CreatePessoaComponent,
    ListPessoaComponent,
    DetailsPessoaComponent
  ],
  exports: [
    ListPessoaComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    MatRadioModule
  ]
})
export class PessoaModule { }
