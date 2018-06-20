import { Pipe, PipeTransform } from '@angular/core';
import Vehicules from "../models/vehicules/vehicules";

@Pipe({
  name: 'immatFilter'
})
export class ImmatFilterPipe implements PipeTransform {

  transform(value: Array<Vehicules>, args?: string): any {
    if (!args) {
      return value;
    } else {
      return value.filter(vehicule => vehicule.immatriculation.toLowerCase().includes(args.toLowerCase()));
    }
  }
}
