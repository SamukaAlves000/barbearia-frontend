import { Component, OnInit } from '@angular/core';
import {Servico} from '../service.model';
import {ServiceServiceService} from '../service-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-details-service',
  templateUrl: './details-service.component.html',
  styleUrls: ['./details-service.component.scss']
})
export class DetailsServiceComponent implements OnInit {

  servico: Servico = {
    id: null,
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
  constructor(private servicoService: ServiceServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idService');
    this.servicoService.readById(id).subscribe(servico => {
        this.servico = servico;
      }
    );
  }

  updateService() {
      this.servicoService.updateServico(this.servico).subscribe(() => {
      this.servicoService.showMessage('Service updated successfully!');
      this.cancel();
    });
  }

  cancel() {
    this.router.navigate(['service']);
  }
}
