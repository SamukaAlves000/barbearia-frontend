import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceServiceService} from '../service-service.service';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.scss']
})
export class CreateServiceComponent implements OnInit {

  constructor(private router: Router, private serviceService: ServiceServiceService) { }

  ngOnInit(): void {
  }

  cancel() {
    this.router.navigate(['service']);
  }

  createService() {
    this.serviceService.showMessage('Service successfully created!');
  }
}
