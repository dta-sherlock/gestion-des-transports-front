import { Pipe, PipeTransform } from '@angular/core';
import CompanyCar from "../models/vehicules/CompanyCar";

@Pipe({
  name: 'FilterByImmat'
})
export class ImmatFilterPipe implements PipeTransform {

  transform(value: Array<CompanyCar>, immatFilter: string): Array<CompanyCar> {
    if (immatFilter) {
      return value.filter(vehicule => vehicule.immatriculation.toLowerCase().startsWith(immatFilter.toLowerCase()));
    } else {
      return value;
    }
  }
}
