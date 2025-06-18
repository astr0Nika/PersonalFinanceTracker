export class DateTime {
  // constructor(
  //   year: number,
  //   month: number,
  //   day: number,
  //   hour: number,
  //   minute: number
  // );
  // {
  //   this.year = year;
  //   this.month = month;
  //   this.day = day;
  //   this.hour = hour;
  //   this.minute = minute;
  // }

  constructor(date: Date) {
    this.year = date.getFullYear();
    this.month = date.getMonth();
    this.day = date.getDay();
    this.hour = date.getHours();
    this.minute = date.getMinutes();
  }

  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
}
