import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceServiceService} from '../service-service.service';
import {Servico} from '../service.model';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.scss']
})
export class CreateServiceComponent implements OnInit {

  servico: Servico = {
    descricao: '',
    duracao: null,
    preco: null
  };

  duracoes = [
    {id: 1, duracao: 15},
    {id: 2, duracao: 30},
    {id: 3, duracao: 45},
    {id: 4, duracao: 60}
  ];
  selectedValue = null;

  constructor(private router: Router, private serviceService: ServiceServiceService) { }

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['service']);
  }

  createService() {
      this.serviceService.addServico(this.servico).subscribe(() => {
      this.serviceService.showMessage('Service successfully created!');
      this.cancel();
    });
  }

}
