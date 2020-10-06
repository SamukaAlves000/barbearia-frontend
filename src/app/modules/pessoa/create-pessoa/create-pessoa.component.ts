import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-pessoa',
  templateUrl: './create-pessoa.component.html',
  styleUrls: ['./create-pessoa.component.scss']
})
export class CreatePessoaComponent implements OnInit {
  ufs = [
    {id: 1, sigla: 'GO'},
    {id: 2, sigla: 'DF'},
    {id: 3, sigla: 'MT'},
    {id: 4, sigla: 'MTS'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  cancel() {

  }

  createPerson() {

  }
}
