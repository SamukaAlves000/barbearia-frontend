import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }
  bigChart() {
    return [{
      name: 'Asia',
      data: [102, 635, 809, 947, 1402, 3025, 5269]
    },
      {
        name: 'Africa',
        data: [302, 235, 409, 347, 8402, 3025, 1269]
      },
      {
        name: 'Europe',
        data: [502, 635, 809, 947, 1402, 3025, 5269]
      },
      {
        name: 'America',
        data: [502, 635, 809, 947, 1402, 3025, 5269]
      },
      {
        name: 'Oceania',
        data: [2, 6, 8, 947, 14, 30, 52]
      }];
  }

  cards() {
    return [20, 50, 20, 20];
  }
}
