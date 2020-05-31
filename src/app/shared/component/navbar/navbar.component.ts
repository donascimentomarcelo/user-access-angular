import { MatSidenav } from '@angular/material';
import { Component, OnInit, Input } from '@angular/core';

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

}
