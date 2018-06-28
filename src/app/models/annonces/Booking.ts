export class Booking {
  id: number;
  startDate: Date;
  endDate: Date;
  user: User;

  constructor(id: number, startDate: Date, endDate: Date) {
    this.id = id;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
