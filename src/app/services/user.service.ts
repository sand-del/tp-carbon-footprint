import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user = "";

  constructor() { }

  login(user: string) {
    this.user = user;
  }

  get username() {
    return this.user;
  }
}
