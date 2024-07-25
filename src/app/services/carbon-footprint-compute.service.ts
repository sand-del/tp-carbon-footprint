import {Injectable} from '@angular/core';
import {Voyage} from "../entities/voyage";

@Injectable({
  providedIn: 'root'
})
export class CarbonFootprintComputeService {

  private voyages: Voyage[] = [
  ]

  getVoyages() {
    return this.voyages
  }

  addVoyages(voyage: Voyage) {
    switch (voyage.typeDeTransport) {
      case 'voiture' :
        voyage.quantiteC02 = voyage.distanceKm * voyage.consommationPour100Km / 100 * 2.3;
        break;

      case 'train':
        voyage.quantiteC02 = voyage.distanceKm * 0.03;
        break;

      case 'avion':
        voyage.quantiteC02 = voyage.distanceKm * 0.2;
        break;

    }
    this.voyages.push(voyage)
  }

  getResumeVoyages(): Voyage {
    let distanceKm = 0;
    let consommationPour100Km = 0;
    let quantiteC02 = 0;
    let date = "";
    let typeDeTransport = ""

    if (this.voyages) {
      this.voyages.forEach(
        (voyage) => {
          distanceKm += voyage.distanceKm;
          consommationPour100Km += voyage.consommationPour100Km;
          // quantiteC02 += voyage.quantiteC02;
          date += voyage.date;
          typeDeTransport += typeDeTransport
        });
    }
    consommationPour100Km =
      Math.round(100 * consommationPour100Km / this.voyages.length) / 100;

    return {
      distanceKm: distanceKm,
      consommationPour100Km: consommationPour100Km,
      quantiteC02: quantiteC02,
      date: date,
      typeDeTransport: typeDeTransport
    }
  }

  constructor() {
  }

}
