import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Servico} from '../service.model';
import {ServiceServiceService} from '../service-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.scss']
})
export class ListServiceComponent implements OnInit {

  services: Servico[];
  constructor(private serviceService: ServiceServiceService, private  router: Router) { }

  displayedColumns: string[] = ['id', 'description', 'duration', 'price',  'action'];
  dataSource: MatTableDataSource<Servico>;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.services);
    this.readServices();
  }

  readServices() {
    this.serviceService.read().subscribe( services => {
        this.dataSource.data = services;
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  excluirServico(id: number) {

    this.serviceService.deleteServico(id)
      .subscribe(
        data => {
          this.readServices();
          this.serviceService.showMessage("Serviço excluído com sucesso!");
        },
        error => console.log(error));

  }

  navigateToDetails(id: number) {
    this.router.navigate(['service/update/' + id]);
  }
}
