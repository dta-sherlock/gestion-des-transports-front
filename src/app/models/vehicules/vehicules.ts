
 export enum CarCategory {
  MicroUrbaines = "MicroUrbaines", MiniCitadines= "Mini Citadines", CitadinesPolyvalentes= "Citadines Polyvalentes",
  Compactes="Compactes", BerlinesTailleS="Berlines Taille S", BerlinesTailleM="Berlines Taille M",
  BerlinesTailleL="Berlines Taille L", SUV="SUV", ToutTerrains="Tout Terrains", PickUp="Pick Up"
}

export default class Vehicules {
  private _immatriculation: string;
  private _brand : string;
  private _model : string;
  private _carCategory : CarCategory;
  private _placeAvailable : number;
  private _photo : string;


  constructor(immatriculation: string, brand: string, model : string, carCategory : CarCategory, placeAvailable : number, photo : string) {
    this._immatriculation = immatriculation;
    this._brand = brand;
    this._model = model;
    this._carCategory = carCategory;
    this._placeAvailable = placeAvailable;
    this._photo = photo;

  }

  get immatriculation(): string {
    return this._immatriculation;
  }

  get brand(): string {
    return this._brand;
  }

  get model(): string {
    return this._model;
  }

  get carCategory(): CarCategory {
    return this._carCategory;
  }

  get placeAvailable(): number {
    return this._placeAvailable;
  }
  get photo(): string {
    return this._photo;
  }
}
