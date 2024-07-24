import {Component, OnInit} from '@angular/core';
import {CarbonFootprintFormComponent} from "../carbon-footprint-form/carbon-footprint-form.component";
import {CarbonFootprintResultComponent} from "../carbon-footprint-result/carbon-footprint-result.component";
import {DecimalPipe, NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {CarbonFootprintComputeService} from "../../services/carbon-footprint-compute.service";
import {Voyage} from "../entities/voyage";

@Component({
  selector: 'app-carbon-footprint',
  standalone: true,
  imports: [
    CarbonFootprintFormComponent,
    CarbonFootprintResultComponent,
    NgIf,
    NgClass,
    NgForOf,
    DecimalPipe,
    NgStyle
  ],
  templateUrl: './carbon-footprint.component.html',
  styleUrl: './carbon-footprint.component.css'
})
export class CarbonFootprintComponent implements OnInit {

  voyage: Voyage

  constructor(private carbonFootPrintComputeService: CarbonFootprintComputeService) {
    this.voyage = carbonFootPrintComputeService.getResumeVoyages();
  }

  //test de ngOnInit
  ngOnInit(): void {
    this.calculateDistance()
    console.log('Component carbon-footprint initialized');
  }

  ajouter100() {
    this.voyage.distanceKm += 100
  }

  getVoyages() {
    return this.carbonFootPrintComputeService.getVoyages()
  }

  ajouterVoyage() {

    function getRandomInt(min: number, max: number) {
      return Math.floor(min + Math.random() * max);
    }

    let distance = getRandomInt(10, 500);
    let conso = getRandomInt(1, 10);

    this.carbonFootPrintComputeService.addVoyages({
        distanceKm: distance,
        consommationPour100Km: conso,
        quantiteC02: distance * conso / 100 * 2.3
      }
    );
    this.calculateDistance();
  }

  calculateConsoColor() {
    if (this.voyage.consommationPour100Km > 7) return 'red';
    if (this.voyage.consommationPour100Km < 4) return 'green';
    return '';
  }

  private calculateDistance() {
    this.voyage = this.carbonFootPrintComputeService.getResumeVoyages()
  }
}


