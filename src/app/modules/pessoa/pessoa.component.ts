import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  createPessoaToRedirect() {
    this.router.navigate(['pessoa/create']);
  }
}
