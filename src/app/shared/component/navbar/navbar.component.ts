import { MatSidenav } from '@angular/material';
import { Component, OnInit, Input } from '@angular/core';
import { Constants } from 'src/app/constants/constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() isMenuOpen: boolean;
  @Input() sidenav: MatSidenav;

  constructor(
  ) { }

  ngOnInit() {
  }

  changeMenuIcon = () => this.isMenuOpen ? Constants.CLOSE : Constants.MENU;
}
