import {LocaleData} from 'ngx-bootstrap';

export class Booking {
  private _id: number ;
  private _startDate: Date ;
  private _endDate: Date ;
  public user: User;

  constructor(id: number, startDate: Date, endDate: Date) {
    this._id = id;
    this._startDate = startDate;
    this._endDate = endDate;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get startDate(): Date {
    return this._startDate;
  }

  set startDate(value: Date) {
    this._startDate = value;
  }

  get endDate(): Date {
    return this._endDate;
  }

  set endDate(value: Date) {
    this._endDate = value;
  }
}
