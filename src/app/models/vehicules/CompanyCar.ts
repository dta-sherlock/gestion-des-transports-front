
 export enum CarCategory {
  MicroUrbaines = "MicroUrbaines", MiniCitadines= "Mini Citadines", CitadinesPolyvalentes= "Citadines Polyvalentes",
  Compactes="Compactes", BerlinesTailleS="Berlines Taille S", BerlinesTailleM="Berlines Taille M",
  BerlinesTailleL="Berlines Taille L", SUV="SUV", ToutTerrains="Tout Terrains", PickUp="Pick Up"
}

export default class CompanyCar {
   immatriculation: string;
   brand: string;
   model: string;
   category: CarCategory;
   availableSeats: number;
   photo: string;


  constructor(immatriculation: string, brand: string, model: string, category: CarCategory, availableSeats: number, photo: string) {
    this.immatriculation = immatriculation;
    this.brand = brand;
    this.model = model;
    this.category = category;
    this.availableSeats = availableSeats;
    this.photo = photo;

  }


}
