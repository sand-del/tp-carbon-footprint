import { Routes } from '@angular/router';
import {SummaryComponent} from "./summary/summary.component";
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {authentificationGuard} from "./authentification.guard";

export const routes: Routes = [
  {path: 'summary', component: SummaryComponent, canActivate : [authentificationGuard]},
  {path: 'profile/:user', component: ProfileComponent, canActivate : [authentificationGuard]},
  {path : '**', component: HomeComponent}
];
