import moment from 'moment';
import Time from './Time';

class ElvishDate {

  /* ******* ATRIBUTES ******* */

  /*
   * constructor() - current time
   * constructor(int) - given time
   * constructor(Date) - given time
   */
  constructor(...args) {
    if (args.length === 0) {
      this.gregorian = new Date();
    } else if (args.length === 1) {
      const time = args[0];
      if (typeof time === 'number') {
        this.gregorian = new Date(time);
      } else if (time instanceof Date) {
        this.gregorian = new Date();
      }
    }
  }

  setSunset(sunset) {
    this.sunset = sunset;
    return this;
  }
  convert() {
    console.log(this.gregorian);
  }

  /**
   * Accepts no argument, Date instance, or same arguments as Date constructor
   * @param args
   * @returns {ElvishDate}
   */
  static fromDate(...args) {
    let date;
    if (args.length === 1 && args[0] instanceof Date) {
      date = args[0];
    } else {
      date = new Date(...args);
    }
    return new ElvishDate(date);
  }

}

export default ElvishDate;
