import {LocaleData} from 'ngx-bootstrap';

export class Booking {
  private _id: number ;
  private _startDate: string ;
  private _endDate: Date ;
  private _creator: User;


  constructor(id: number, startDate: string, endDate: Date, creator: User) {
    this._id = id;
    this._startDate = startDate;
    this._endDate = endDate;
    this._creator = creator;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get startDate(): string {
    return this._startDate;
  }

  set startDate(value: string) {
    this._startDate = value;
  }

  get endDate(): Date {
    return this._endDate;
  }

  set endDate(value: Date) {
    this._endDate = value;
  }

  get creator(): User {
    return this._creator;
  }

  set creator(value: User) {
    this._creator = value;
  }
}
