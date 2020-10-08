import { Component, OnInit } from '@angular/core';
import {Pessoa} from '../pessoa.model';
import {ActivatedRoute, Router} from '@angular/router';
import {PessoaService} from '../pessoa.service';

@Component({
  selector: 'app-details-pessoa',
  templateUrl: './details-pessoa.component.html',
  styleUrls: ['./details-pessoa.component.scss']
})
export class DetailsPessoaComponent implements OnInit {

  pessoa: Pessoa = {
    id: null,
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
    uf: null,
    funcionario: null
  };

  ufs = [
    {id: 1, sigla: 'GO'},
    {id: 2, sigla: 'DF'},
    {id: 3, sigla: 'MT'},
    {id: 4, sigla: 'MTS'}
  ];

  constructor(private route: ActivatedRoute, private pessoaService: PessoaService, private  router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idPessoa');
    this.pessoaService.readById(id).subscribe(pessoa => {
        this.pessoa = pessoa;
        console.log(pessoa);
      }
    );
  }

  updatePessoa() {
    this.pessoaService.updatePessoa(this.pessoa).subscribe(() => {
      this.pessoaService.showMessage('Pessoa atualizada com sucesso');
      this.cancel();
    });
  }

  cancel() {
    this.router.navigate(['pessoa']);
  }

}
