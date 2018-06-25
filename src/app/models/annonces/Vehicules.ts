export enum CarCategory {
  MicroUrbaines = "MicroUrbaines", MiniCitadines= "Mini Citadines", CitadinesPolyvalentes= "Citadines Polyvalentes",
  Compactes="Compactes", BerlinesTailleS="Berlines Taille S", BerlinesTailleM="Berlines Taille M",
  BerlinesTailleL="Berlines Taille L", SUV="SUV", ToutTerrains="Tout Terrains", PickUp="Pick Up"
}

export default class Vehicules {
  immatriculation: string;
  brand : string;
  model : string;
  category : CarCategory;
  placeAvailable : number;
  photo : string;


  constructor(immatriculation: string, brand: string, model : string, carCategory : CarCategory, placeAvailable : number, photo : string) {
    this.immatriculation = immatriculation;
    this.brand = brand;
    this.model = model;
    this.category = carCategory;
    this.placeAvailable = placeAvailable;
    this.photo = photo;

  }


}
