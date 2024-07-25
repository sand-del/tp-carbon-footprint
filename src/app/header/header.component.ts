import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = "Carbon Footprint";
  nomUtilisateur: String = "Sandra";

  constructor(service: UserService) {
    this.nomUtilisateur = service.username; /* TODO Voir au module 9 pour régler soucis cycle de vie */
  }
}
