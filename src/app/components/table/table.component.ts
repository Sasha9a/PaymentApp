import {Component, OnInit} from '@angular/core';
import { Payment } from "../../models/Payment/payment.model";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  payments: Payment[] = [];
  cols: any[] = [];
  selectedColumns: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.payments = [
      new Payment(1, "Аренда хостинга", 250, 0),
      new Payment(2, "Продление хостинга", 240, 10),
      new Payment(3, "Покупка домена", 500, 299),
      new Payment(4, "Продление хостинга", 200, 50),
      new Payment(5, "Смена тарифного плана хостинга", 650, 49)
    ];

    this.cols = [
      { field: 'id', header: 'Номер' },
      { field: 'name', header: 'Название' },
      { field: 'sum', header: 'Сумма' },
      { field: 'discount', header: 'Скидка' }
    ];

    this.selectedColumns = this.cols;
  }

}
