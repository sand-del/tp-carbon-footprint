import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {min} from "rxjs";
import {UserService} from "../services/user.service";
import {CarbonFootprintComputeService} from "../services/carbon-footprint-compute.service";
import {NgIf} from "@angular/common";
import {Voyage} from "../entities/voyage";

@Component({
  selector: 'app-carbon-footprint-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './carbon-footprint-form.component.html',
  styleUrl: './carbon-footprint-form.component.css'
})
export class CarbonFootprintFormComponent {

  formVoyage: FormGroup;
  voyage: Voyage


  constructor(private service: CarbonFootprintComputeService) {
    this.formVoyage = new FormGroup({
      distanceKm: new FormControl('', [Validators.required, Validators.min(0)]),
      consommationPour100Km: new FormControl(),
      date: new FormControl('', [Validators.required]),
      typeDeTransport : new FormControl('', [Validators.required])
    })
    this.voyage = service.getResumeVoyages()
  }

  onFormSubmit() {
    console.log(this.formVoyage.value);
  }

  enregistrerVoyage() {

    if (!this.formVoyage.valid) return;

    this.service.addVoyages({
      distanceKm: this.formVoyage.value.distanceKm,
      consommationPour100Km: this.formVoyage.value.consommationPour100Km,
      // quantiteC02: (this.formVoyage.value.distanceKm) * (this.formVoyage.value.consommationPour100Km) / 100 * 2.3,
      date: this.formVoyage.value.date,
      typeDeTransport : this.formVoyage.value.typeDeTransport

    })
    this.calculateDistance()
  }

  private calculateDistance() {
    this.voyage = this.service.getResumeVoyages()
  }

  /* TODO : finaliser la mise à jour du getResumeVoyages */
}
