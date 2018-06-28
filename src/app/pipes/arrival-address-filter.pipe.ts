import { Pipe, PipeTransform } from '@angular/core';
import {CarpoolBooking} from '../models/CarpoolBooking';

@Pipe({
  name: 'FilterByArrivalAddress'
})
export class ArrivalAddressFilterPipe implements PipeTransform {

  transform(value: Array<CarpoolBooking>, arrivalAddressfilter: string): any [] {
    if (arrivalAddressfilter) {
      return value.filter(carpoolBooking => carpoolBooking.arrivalAddress.toLowerCase()
        .startsWith(arrivalAddressfilter.toLowerCase()));
    } else {
      return value;
    }
  }

}
