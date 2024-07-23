import {Component, OnInit} from '@angular/core';
import {CarbonFootprintFormComponent} from "../carbon-footprint-form/carbon-footprint-form.component";
import {CarbonFootprintResultComponent} from "../carbon-footprint-result/carbon-footprint-result.component";
import {DecimalPipe, NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";

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

  distanceKm: number = 10;
  consommationPour100Km: number = 8.222;
  voyages = [
    {distanceKm: 50, consommationPour100Km: 5},
    {distanceKm: 150, consommationPour100Km: 6},
    {distanceKm: 250, consommationPour100Km: 7},
    {distanceKm: 350, consommationPour100Km: 8},
    {distanceKm: 450, consommationPour100Km: 9}
  ]
  newVoyage = {distanceKm: 50, consommationPour100Km: 5}

  //test de ngOnInit
  ngOnInit(): void {
    console.log('Component carbon-footprint initialized');
  }

  ajouter100() {
    this.distanceKm += 100
  }

  ajouterVoyage() {

    function getRandomInt(min: number, max: number) {
      return Math.floor(min + Math.random() * max);
    }

    this.voyages.push({distanceKm: getRandomInt(10, 500), consommationPour100Km: getRandomInt(1, 10)});
    this.calculateDistance();
  }

  calculateConsoColor() {
    if (this.consommationPour100Km > 7) return 'red';
    if (this.consommationPour100Km < 4) return 'green';
    return '';
  }

  private calculateDistance() {
    this.distanceKm = 0;
    this.consommationPour100Km = 0;
    if (this.voyages) {
      this.voyages.forEach(
        (voyage) => {
          this.distanceKm += voyage.distanceKm;
          this.consommationPour100Km += voyage.consommationPour100Km;
        });
    }
    this.consommationPour100Km =
      Math.round(100 * this.consommationPour100Km / this.voyages.length) / 100;

  }
}


