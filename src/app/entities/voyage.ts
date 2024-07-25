export interface Voyage {
  distanceKm : number,
  consommationPour100Km : number,
  typeDeTransport : string;
  quantiteC02 ?: number,
  date : string
}
