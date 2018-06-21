import { Pipe, PipeTransform } from '@angular/core';
import Vehicules from "../models/vehicules/vehicules";

@Pipe({
  name: 'FilterByBrand'
})
export class BrandFilterPipe implements PipeTransform {

  transform(value: Array<Vehicules>, brandFilter: string): any [] {
    if (brandFilter) {
      return value.filter(vehicule => vehicule.brand.toLowerCase().startsWith(brandFilter.toLowerCase()));
    } else {
      return value;
    }
  }
}
