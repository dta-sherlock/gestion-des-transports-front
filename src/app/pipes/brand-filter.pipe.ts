import { Pipe, PipeTransform } from '@angular/core';
import Vehicules from "../models/vehicules/vehicules";

@Pipe({
  name: 'brandFilter'
})
export class BrandFilterPipe implements PipeTransform {

  transform(value: Array<Vehicules>, args?: string): any {
    if (!args) {
      return value;
    } else {
      return value.filter(vehicule => vehicule.brand.toLowerCase().includes(args.toLowerCase()));
    }
  }
}
