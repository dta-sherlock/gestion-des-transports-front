import {LocaleData} from 'ngx-bootstrap';

export class Booking {
  private _id: number ;
  private _startDate: LocaleData ;
  private _endDate: LocaleData ;
  public user: User;

  constructor(id: number, startDate: LocaleData, endDate: LocaleData) {
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

  get startDate(): LocaleData {
    return this._startDate;
  }

  set startDate(value: LocaleData) {
    this._startDate = value;
  }

  get endDate(): LocaleData {
    return this._endDate;
  }

  set endDate(value: LocaleData) {
    this._endDate = value;
  }
}
