import { UserDto } from './../../../models/user-dto';
import { Constants } from 'src/app/constants/constants';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public dataSource: UserDto[] = [];
  public displayedColumns: string[] = ['username', 'name', 'email'];

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.getUsers());
  }

  getUsers = () => this.dataSource = this.route.data[Constants.VALUE].users;
}
