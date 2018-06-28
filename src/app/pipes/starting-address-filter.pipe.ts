import { Pipe, PipeTransform } from '@angular/core';
import {CarpoolBooking} from '../models/CarpoolBooking';

@Pipe({
  name: 'FilterByStartingAddress'
})
export class StartingAddressFilterPipe implements PipeTransform {

  transform(value: Array<CarpoolBooking>, startingAddressfilter: string): any [] {
    if (startingAddressfilter) {
      return value.filter(carpoolBooking => carpoolBooking.startingAddress.toLowerCase()
        .startsWith(startingAddressfilter.toLowerCase()));
    } else {
      return value;
    }
  }

}
