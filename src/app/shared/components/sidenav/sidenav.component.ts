import { MenuItem } from '../../models/menu-item';
import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public isMenuOpen = false;
  public menuItems: MenuItem[] = [
    { key: `/profile/${this.storageService.getUser().username}`, value: 'Perfil', icon: 'person' },
    { key: '/users', value: 'Listar', icon: 'table_rows' },
    { key: '/logout', value: 'Sair', icon: 'logout' },
  ];

  constructor(
    private storageService: StorageService,
  ) { }

  ngOnInit() { }

  onSidenavClick = () => this.isMenuOpen = false;

}
