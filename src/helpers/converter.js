import calendar from './calendar';
import utils from './utils';
import ElvishDate from '../ElvishDate';

const converter = {
  /**
   * @param {number} year
   * @returns {number}
   */
  calculateYenFromYear(year) {
    const sign = year >= 0 ? 1 : -1;
    return Math.floor((year - 1) / 144) + sign;
  },
  /**
   * @param {number} year
   * @returns {number}
   */
  calculateLoaFromYear(year) {
    let loa = 0;
    const sign = year >= 0 ? 1 : -1;
    if (year !== 0) {
      loa = ((year - 1) % 144) + sign;
    }
    return loa;
  },
  /**
   * @param {number} year
   * @returns {number}
   */
  calculateYestareFromYear(year) {
    const yen = this.calculateYenFromYear(year);
    const loa = this.calculateLoaFromYear(year);
    const yestare = calendar.calculateYestare(yen, loa);
    return yestare;
  },
  /**
   * Gets an ElvishDate object from a Date object
   * @param {Date} date
   * @returns {ElvishDate}
   */
  getFromDate(date) {
    // if sunset defined, check if has passed
    /* if (this.isSunsetDefined()) {
      String str = cal.get(GregorianCalendar.HOUR_OF_DAY) + ":"
        + cal.get(GregorianCalendar.MINUTE) + ":"
        + cal.get(GregorianCalendar.SECOND);
      Time time = Time.valueOf(str);
      if (!time.before(this.getSunset())) {
        cal.add(GregorianCalendar.DAY_OF_MONTH, 1);
        cal.set(GregorianCalendar.HOUR_OF_DAY, 0);
      }
    } */
    let year = date.getFullYear();
    // calculate day of march of year 'year' in which loa begins
    let loaBeg = this.calculateYestareFromYear(year);
    let loaDate = new Date(year, 2, loaBeg); // March = 2
    // if that day hasn't come yet, use previous year's loa
    if (date.getTime() < loaDate.getTime()) {
      year -= 1;
      loaBeg = this.calculateYestareFromYear(year);
      loaDate = new Date(year, 2, loaBeg);
    }
    // calculate loa
    const loa = this.calculateLoaFromYear(year);
    // get amount of days of ongoing loa
    const dayOfLoa = utils.getDaysBetweenDates(loaDate, date);
    // calculate current month and day of month
    const period = calendar.calculatePeriod(loa, dayOfLoa);
    const dayOfPeriod = calendar.calculateDayOfPeriod(loa, dayOfLoa);
    // calculate yen
    const yen = this.calculateYenFromYear(year);

    /* when sunset available
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();
    */

    return new ElvishDate(yen, loa, period, dayOfPeriod);
  },
  /**
   * Gets an Date object from a ElvishDate object
   * @param {ElvishDate} elvishDate
   * @returns {Date}
   */
  getAsDate(elvishDate) {
    const yen = elvishDate.getYen();
    const loa = elvishDate.getLoa();
    const period = elvishDate.getPeriod();
    const dayOfPeriod = elvishDate.getDayOfPeriod();
    const dayOfLoa = calendar.calculateDayOfLoa(yen, loa, period, dayOfPeriod);

    const fullYear = ((yen - 1) * 144) + loa;
    const month = 2;
    const day = calendar.calculateYestare(yen, loa);
    const date = new Date(fullYear, month, day);

    const result = new Date(date);
    result.setDate(result.getDate() + (dayOfLoa - 1));

    // TODO extend with sunset when available
    return result;
  },
};

export default converter;
