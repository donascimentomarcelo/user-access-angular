import { Injectable } from '@angular/core';
import { LocalStorage as Storage } from '../constants/localStorage';
import { UserLS } from '../models/user-ls';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private ls = localStorage.getItem(Storage.USER);

  constructor() { }

  getUser = () => this.ls ? JSON.parse(this.ls) : null;

  setUser = (userLS: UserLS) => userLS ? localStorage.setItem(Storage.USER, JSON.stringify(userLS)) : localStorage.removeItem(Storage.USER);
}
