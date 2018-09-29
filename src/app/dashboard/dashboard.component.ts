import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  orders: any[] = [
    {
      createdAt: 'Thu Nov 29 2018 18:30:12 GMT-0200 (Brasilia Summer Time)',
      address: 'Avenida Cruzeiro do Sul 1231',
      order_number: 342,
      status: 2,
      products: [
        {
          description: '1 Pizza de Mussarela'
        },
        {
          description: '1 Pizza de Calabresa'
        }
      ],
      price: 52.25
    },
    {
      createdAt: 'Thu Nov 29 2018 18:30:12 GMT-0200 (Brasilia Summer Time)',
      address: 'Avenida Cruzeiro do Sul 1231',
      order_number: 343,
      status: 2,
      products: [
        {
          description: '1 Pizza de Mussarela'
        },
        {
          description: '1 Pizza de Calabresa'
        }
      ],
      price: 52.25
    },
    {
      createdAt: 'Thu Nov 29 2018 18:30:12 GMT-0200 (Brasilia Summer Time)',
      address: 'Avenida Cruzeiro do Sul 1231',
      order_number: 344,
      status: 2,
      products: [
        {
          description: '1 Pizza de Mussarela'
        },
        {
          description: '1 Pizza de Calabresa'
        }
      ],
      price: 52.25
    }
  ];

  constructor() {}

  ngOnInit() {
  }

  showOrder() {
    console.log(this.orders);
  }

  changeStatus(status, index) {
    console.log(index);
    this.orders[index].status = status;
  }

  badgeClass(status) {
    switch (status) {
      case 0: return 'badge-primary';
      case 1: return 'badge-danger';
      case 2: return 'badge-warning';
      case 3: return 'badge-success';

    }
  }

}
