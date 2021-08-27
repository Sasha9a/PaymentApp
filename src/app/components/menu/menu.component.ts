import { Component, OnInit } from '@angular/core';
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Новости', icon: 'pi pi-fw pi-book'},
      {label: 'Настройки', icon: 'pi pi-fw pi-cog'},
      {label: 'Выйти', icon: 'pi pi-fw pi-sign-out'}
    ];
  }

}
