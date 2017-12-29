import calendar from './helpers/calendar';

class ElvishDate {

  // Public API

  /**
   * constructor()
   * constructor(Date)
   * constructor(ElvishDate)
   * constructor(attributes)
   * constructor(yen, loa, period[, day[, hour[, minute[, second[, millisecond]]]]])
   *
   * @param args
   */
  constructor(...args) {
    this.initializeAttributes();
    if (args.length <= 0) {
      this.setGregorianDate(new Date());
    } else {
      const firstArg = args[0];
      if (firstArg instanceof Date) {
        this.setGregorianDate(firstArg);
      } else if (firstArg instanceof ElvishDate) {
        this.copyElvishDate(firstArg);
      } else if (typeof firstArg === 'object') {
        this.setAttributes(firstArg);
      } else {
        const attributes = this.parseConstructorArguments(...args);
        this.setAttributes(attributes);
      }
    }
  }

  /**
   * Number of arguments handled by constructor
   * @returns {number}
   */
  static get length() {
    return 8;
  }

  /**
   * Accepts same arguments as the standard Date constructor, or accepts a Date instance
   * fromDate()
   * fromDate(int)
   * fromDate(dateString)
   * fromDate(year, month[, day[, hours[, minutes[, seconds[, milliseconds]]]]])
   * fromDate(Date)
   *
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

  /**
   * Return the number of milliseconds since time 00:00:00 of Yestarë, I 1 (March 29, 1)
   * @returns {number}
   */
  static now() {
  }

  /**
   * Return number of the Yen (> 0) for the specified date
   * @returns {number}
   */
  getYen() {
    return this.yen;
  }
  /**
   * Returns the roman numerals representation of the Yen for the specified date
   * @returns {string}
   */
  getYenNumeral() {
    return calendar.getYenNumeral(this.yen);
  }
  /**
   * Return the number of the Loa (1-144) for the specified date
   * @returns {number}
   */
  getLoa() {
    return this.loa;
  }
  /**
   * Return the number (0-8) of the Period for the specified date
   * @returns {number}
   */
  getPeriod() {
    return this.period;
  }
  /**
   * Return the name of the Period for the specified date
   * @returns {string}
   */
  getPeriodName() {
    return calendar.getPeriodName(this.period);
  }
  /**
   * Return the number of Day of the Period (1-based index, upper limit depends on Period)
   * for the specified date
   * @returns {number}
   */
  getDayOfPeriod() {
    return this.day;
  }
  /**
   * Return the number (0-5) of Day of the Week for the specified date
   * @returns {number}
   */
  getDayOfWeek() {
    return calendar.getDayOfWeek(this);
  }
  /**
   * Return the name of the Day of the Week for the specified date
   * @returns {string}
   */
  getDayOfWeekName() {
    return calendar.getDayOfWeekName(this.getDayOfWeek());
  }
  /**
   * Return the number of the Hour (from 0, variable upper limit depending sunset time)
   * for the specified date
   * @returns {number}
   */
  getHours() {
    return this.hour;
  }
  /**
   * Return the number of the Minute for the specified date
   * @returns {number}
   */
  getMinutes() {
    return this.minute;
  }
  /**
   * Return the number of the Second for the specified date
   * @returns {number}
   */
  getSeconds() {
    return this.second;
  }
  /**
   * Return the number of the Millisecond for the specified date
   * @returns {number}
   */
  getMilliseconds() {
    return this.millisecond;
  }

  /**
   * Returns the numeric value of the specified date as the number of milliseconds
   * since Yestarë, I 1, 00:00:00 (not supported for prior times).
   * @returns {number}
   */
  getTime() {
    return calendar.getTime(this);
  }

  /**
   * Sets the Yen value (> 0) for a specified date
   * @param {number} yen
   */
  setYen(yen) {
    calendar.setYen(this, yen);
  }
  /**
   * Sets the Loa value (1-144) for a specified date
   * @param {number} loa
   */
  setLoa(loa) {
    calendar.setLoa(this, loa);
  }
  /**
   * Sets the Period value (0-8) for a specified date
   * @param {number} period
   */
  setPeriod(period) {
    calendar.setPeriod(this, period);
  }
  /**
   * Sets the Day of Period value (1-based index, upper limit depends on Period)
   * for a specified date
   * @param {number} dayOfPeriod
   */
  setDayOfPeriod(dayOfPeriod) {
    calendar.setDayOfPeriod(this, dayOfPeriod);
  }
  /**
   * Sets the Hour value for a specified date
   * @param {number} hours
   */
  setHours(hours) {
    calendar.setHours(this, hours);
  }
  /**
   * Sets the Minute value for a specified date
   * @param {number} minutes
   */
  setMinutes(minutes) {
    calendar.setMinutes(this, minutes);
  }
  /**
   * Sets the Second value for a specified date
   * @param {number} seconds
   */
  setSeconds(seconds) {
    calendar.setSeconds(this, seconds);
  }
  /**
   * Sets the Millisecond value for a specified date
   * @param {number} milliseconds
   */
  setMilliseconds(milliseconds) {
    calendar.setMilliseconds(this, milliseconds);
  }
  /**
   * Sets the time in number of milliseconds since Yestarë, I 1, 00:00:00 (>= 0)
   * for a specified date.
   * @returns {number}
   */
  setTime(time) {
    calendar.setTime(this, time);
  }

  /**
   * String representation of the specified date.
   * @returns {string}
   */
  toString() {
    return calendar.toString(this);
  }

  // Internal Methods

  static getAttributeNames() {
    return calendar.attributes;
  }
  parseConstructorArguments(...args) {
    const keys = this.getAttributeNames();
    const values = {};
    if (args && args.length > 0) {
      args.forEach((value, i) => {
        values[keys[i]] = value;
      });
    }
    return values;
  }
  initializeAttributes() {
    this.yen = null;
    this.loa = null;
    this.period = null;
    this.day = null;
    this.hour = null;
    this.minute = null;
    this.second = null;
    this.millisecond = null;
  }
  setAttributes(attributes) {
    this.setYen(attributes.yen);
    this.setLoa(attributes.loa);
    this.setPeriod(attributes.period);
    this.setDayOfPeriod(attributes.day);
    this.setHours(attributes.hour);
    this.setMinutes(attributes.minute);
    this.setSeconds(attributes.second);
    this.setMilliseconds(attributes.millisecond);
  }
  copyElvishDate(date) {
    this.setAttributes(date);
  }
  setGregorianDate(date) {
    this.gregorian = date;
  }
}

export default ElvishDate;
