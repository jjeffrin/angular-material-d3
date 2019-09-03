import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const itemList: any[] = [
  {
    orderId: 1032,
    name: 'Adidas Runner Shoe',
    price: 5700,
    customerName: 'Jeffrin J',
    purchaseDate: '12/04/2019'
  },
  {
    orderId: 1032,
    name: 'Nike Sports Shoe',
    price: 5700,
    customerName: 'Ajay A',
    purchaseDate: '12/04/2019'
  },
  {
    orderId: 1032,
    name: 'Samsung Galaxy S10',
    price: 73000,
    customerName: 'Priya B',
    purchaseDate: '12/04/2019'
  },
  {
    orderId: 1032,
    name: 'Apple iPhone XS Max',
    price: 87000,
    customerName: 'Pranav S',
    purchaseDate: '13/04/2019'
  },
  {
    orderId: 1032,
    name: 'Samsung EVO2 SSD m.2 512GB',
    price: 13200,
    customerName: 'Prem M',
    purchaseDate: '13/04/2019'
  }
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  

  displayedColumns: string[] = ['orderId', 'name', 'price', 'customerName', 'purchaseDate'];
  dataSource = itemList;

  constructor() { }

  ngOnInit() {
  }

}
