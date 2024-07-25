import {Component, DoCheck} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {UserService} from "../services/user.service";
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements DoCheck {
  pseudo: string = "";
  password: string = "";
  messages: string[] = [];

  constructor(private router: Router, private service: UserService) {
  }

  ngDoCheck(): void {
    this.checkForm();
  }

  checkForm() {
    this.messages = [];
    if (this.pseudo.length < 3)
      this.messages.push("Le nom d'utilisateur doit faire 3 caractères ou plus");
    if (this.pseudo.length < 6)
      this.messages.push("Le mot de passe doit faire 6 caractères ou plus")
  }

  login() {
    this.checkForm();

    if (this.messages.length == 0) {
      this.service.login(this.pseudo);
      this.router.navigate(['summary']);
    }

  }

}
