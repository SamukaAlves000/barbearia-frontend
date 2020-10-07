import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Pessoa} from '../pessoa.model';
import {PessoaService} from '../pessoa.service';

@Component({
  selector: 'app-create-pessoa',
  templateUrl: './create-pessoa.component.html',
  styleUrls: ['./create-pessoa.component.scss']
})
export class CreatePessoaComponent implements OnInit {

  pessoa: Pessoa = {
    nome: null,
    complemento: null,
    bairro: null,
    cidade: null,
    telefone: null,
    dataNascimento: null,
    email: null,
    cpf: null,
    caminhoFoto: null,
    sexo: null,
    uf: null
  };

  ufs = [
    {id: 1, sigla: 'GO'},
    {id: 2, sigla: 'DF'},
    {id: 3, sigla: 'MT'},
    {id: 4, sigla: 'MTS'}
  ];

  constructor(private router: Router, private pessoaService: PessoaService) {
  }

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['pessoa']);
  }

  createPerson() {
    this.pessoaService.addPessoa(this.pessoa).subscribe(() => {
      this.pessoaService.showMessage('Pessoa criada com sucesso!');
      this.cancel();
    });
  }
}
