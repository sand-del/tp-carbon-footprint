import {Injectable} from '@angular/core';
import {Voyage} from "../entities/voyage";

@Injectable({
  providedIn: 'root'
})
export class CarbonFootprintComputeService {

  private voyages : Voyage[] = [
    {distanceKm: 50, consommationPour100Km: 5, quantiteC02: 50 * 5 / 100 * 2.3},
    {distanceKm: 150, consommationPour100Km: 6, quantiteC02: 150 * 5 / 100 * 2.3},
    {distanceKm: 250, consommationPour100Km: 7, quantiteC02: 250 * 5 / 100 * 2.3},
    {distanceKm: 350, consommationPour100Km: 8, quantiteC02: 350 * 5 / 100 * 2.3},
    {distanceKm: 450, consommationPour100Km: 9, quantiteC02: 450 * 5 / 100 * 2.3}
  ]

  constructor() {
  }

  getVoyages() {
    return this.voyages
  }

  addVoyages(voyage: Voyage) {
    this.voyages.push(voyage)
  }

  getResumeVoyages(): Voyage {
    let distanceKm = 0;
    let consommationPour100Km = 0;
    let quantiteC02 = 0;

    if (this.voyages) {
      this.voyages.forEach(
        (voyage) => {
          distanceKm += voyage.distanceKm;
          consommationPour100Km += voyage.consommationPour100Km;
          quantiteC02 += voyage.quantiteC02;
        });
    }
    consommationPour100Km =
      Math.round(100 * consommationPour100Km / this.voyages.length) / 100;

    return {distanceKm: distanceKm, consommationPour100Km : consommationPour100Km, quantiteC02 : quantiteC02}
  }

}
