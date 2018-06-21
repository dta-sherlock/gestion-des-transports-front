import { Pipe, PipeTransform } from '@angular/core';
import Vehicules from "../models/vehicules/vehicules";

@Pipe({
  name: 'FilterByImmat'
})
export class ImmatFilterPipe implements PipeTransform {

  transform(value: Array<Vehicules>, immatFilter: string): Array<Vehicules> {
    if (immatFilter) {
      return value.filter(vehicule => vehicule.immatriculation.toLowerCase().startsWith(immatFilter.toLowerCase()));
    } else {
      return value;
    }
  }
}
