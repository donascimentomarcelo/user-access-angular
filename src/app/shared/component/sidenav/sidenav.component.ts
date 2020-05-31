import { MenuItem } from './../../models/menu-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public isMenuOpen = false;
  public menuItems: MenuItem[] = [
    { key: '/profile', value: 'Perfil', icon: 'person' },
    { key: '/all', value: 'Listar', icon: 'table_rows' },
    { key: '/logout', value: 'Sair', icon: 'logout' },
  ];

  constructor() { }

  ngOnInit() {

  }

  onSidenavClick = () => this.isMenuOpen = false;

}
