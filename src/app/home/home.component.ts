import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router : Router, private service : UserService) {
  }

  login() {
    this.service.login("Jean");
    this.router.navigate(['summary']);
  }
}
