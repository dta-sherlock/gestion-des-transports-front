import {LocaleData} from 'ngx-bootstrap';

export class Booking {
  private _id: number ;
  private _startDate: Date ;
  private _endDate: Date ;
  private _user: User;


  constructor(id: number, startDate: Date, endDate: Date, user: User) {
    this._id = id;
    this._startDate = startDate;
    this._endDate = endDate;
    this._user = user;
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

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }
}
