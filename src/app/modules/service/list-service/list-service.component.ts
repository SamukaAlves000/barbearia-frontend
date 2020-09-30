import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Service} from '../service.model';
import {ServiceServiceService} from '../service-service.service';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.scss']
})
export class ListServiceComponent implements OnInit {

  services: Service[];
  constructor(private serviceService: ServiceServiceService) { }

  displayedColumns: string[] = ['id', 'description', 'duration', 'price',  'action'];
  dataSource: MatTableDataSource<Service>;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.services);
    this.serviceService.read().subscribe( services => {
        this.dataSource.data = services;
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
