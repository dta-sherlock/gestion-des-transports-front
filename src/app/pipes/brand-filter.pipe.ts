import { Pipe, PipeTransform } from '@angular/core';
import CompanyCar from "../models/vehicules/CompanyCar";

@Pipe({
  name: 'FilterByBrand'
})
export class BrandFilterPipe implements PipeTransform {

  transform(value: Array<CompanyCar>, brandFilter: string): any [] {
    if (brandFilter) {
      return value.filter(vehicule => vehicule.brand.toLowerCase().startsWith(brandFilter.toLowerCase()));
    } else {
      return value;
    }
  }
}
