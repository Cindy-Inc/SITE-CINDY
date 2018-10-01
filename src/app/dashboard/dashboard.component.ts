import { Component, OnInit } from '@angular/core';

import { CindyService } from '../service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // orders: any[] = [
  //   {
  //     createdAt: 'Thu Nov 29 2018 18:30:12 GMT-0200 (Brasilia Summer Time)',
  //     address: 'Avenida Cruzeiro do Sul 1231',
  //     order_number: 342,
  //     status: 2,
  //     products: [
  //       {
  //         description: '1 Pizza de Mussarela'
  //       },
  //       {
  //         description: '1 Pizza de Calabresa'
  //       }
  //     ],
  //     price: 52.25
  //   },
  //   {
  //     createdAt: 'Thu Nov 29 2018 18:30:12 GMT-0200 (Brasilia Summer Time)',
  //     address: 'Avenida Cruzeiro do Sul 1231',
  //     order_number: 343,
  //     status: 2,
  //     products: [
  //       {
  //         description: '1 Pizza de Mussarela'
  //       },
  //       {
  //         description: '1 Pizza de Calabresa'
  //       }
  //     ],
  //     price: 52.25
  //   },
  //   {
  //     createdAt: 'Thu Nov 29 2018 18:30:12 GMT-0200 (Brasilia Summer Time)',
  //     address: 'Avenida Cruzeiro do Sul 1231',
  //     order_number: 344,
  //     status: 2,
  //     products: [
  //       {
  //         description: '1 Pizza de Mussarela'
  //       },
  //       {
  //         description: '1 Pizza de Calabresa'
  //       }
  //     ],
  //     price: 52.25
  //   }
  // ];

  orders: any[];

  constructor(private cindyService: CindyService) {}

  ngOnInit() {
    this.cindyService.getOrderList().subscribe((response: any) => {
      const data = response.json();
      this.orders = this.populateEmptyAdresses(data.response);
    });
  }

  populateEmptyAdresses(orders) {
    return orders.map((order) => {
      order.address = 'Avenida Cruzeiro do Sul 3123';
    });
  }

  changeStatus(status, index) {
    console.log(index);
    this.orders[index].status = status;
  }

}
