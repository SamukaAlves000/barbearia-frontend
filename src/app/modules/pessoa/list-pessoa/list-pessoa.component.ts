import { Component, OnInit } from '@angular/core';
import {Servico} from '../../service/service.model';
import {ServiceServiceService} from '../../service/service-service.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {Pessoa} from '../pessoa.model';
import {PessoaService} from '../pessoa.service';

@Component({
  selector: 'app-list-pessoa',
  templateUrl: './list-pessoa.component.html',
  styleUrls: ['./list-pessoa.component.scss']
})
export class ListPessoaComponent implements OnInit {

  pessoas: Pessoa[];
  constructor(private pessoaService: PessoaService, private  router: Router) { }

  displayedColumns: string[] = ['id', 'nome', 'email', 'cidade',  'action'];
  dataSource: MatTableDataSource<Pessoa>;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.pessoas);
    this.readPessoas();
  }

  readPessoas() {
    this.pessoaService.read().subscribe( pessoas => {
        this.dataSource.data = pessoas;
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  excluirPessoa(id: number) {

    this.pessoaService.deletePessoa(id)
      .subscribe(
        data => {
          this.readPessoas();
          this.pessoaService.showMessage('Pessoa excluída com sucesso!');
        },
        error => console.log(error));

  }

  navigateToDetails(id: number) {
    this.router.navigate(['pessoa/update/' + id]);
  }

}
