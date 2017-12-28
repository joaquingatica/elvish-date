class ElvishDate {

  // Public API

  /**
   * constructor()
   * constructor(yen, loa, period) - for single day periods
   * constructor(yen, loa, period, day) - for multi day periods
   * constructor(ElvishDate)
   * constructor(Date)
   *
   * @param args
   */
  constructor(...args) {
    if (args.length <= 0) {
      this.setGregorianDate(new Date());
    } else {
      const firstArg = args[0];
      if (firstArg instanceof Date) {
        this.setGregorianDate(firstArg);
      } else if (firstArg instanceof ElvishDate) {
        this.copyElvishDate(firstArg);
      } else {
        this.setElvishDate(...args);
      }
    }
  }

  /**
   * Number of arguments handled by constructor
   * @returns {number}
   */
  static get length() {
    return 4;
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
  }
  /**
   * Returns the roman numerals representation of the Yen for the specified date
   * @returns {string}
   */
  getYenNumeral() {
  }
  /**
   * Return the number of the Loa (1-144) for the specified date
   * @returns {number}
   */
  getLoa() {
  }
  /**
   * Return the number (0-8) of the Period for the specified date
   * @returns {number}
   */
  getPeriod() {
  }
  /**
   * Return the name of the Period for the specified date
   * @returns {string}
   */
  getPeriodName() {
  }
  /**
   * Return the number of Day of the Period (1-based index, upper limit depends on Period)
   * for the specified date
   * @returns {number}
   */
  getDayOfPeriod() {
  }
  /**
   * Return the number (0-5) of Day of the Week for the specified date
   * @returns {number}
   */
  getDayOfWeek() {
  }
  /**
   * Return the name of the Day of the Week for the specified date
   * @returns {string}
   */
  getDayOfWeekName() {
  }
  /**
   * Return the number of the Hour (from 0, variable upper limit depending sunset time)
   * for the specified date
   * @returns {number}
   */
  getHours() {
  }
  /**
   * Return the number of the Minute for the specified date
   * @returns {number}
   */
  getMinutes() {
  }
  /**
   * Return the number of the Second for the specified date
   * @returns {number}
   */
  getSeconds() {
  }
  /**
   * Return the number of the Millisecond for the specified date
   * @returns {number}
   */
  getMilliseconds() {
  }

  /**
   * Returns the numeric value of the specified date as the number of milliseconds
   * since Yestarë, I 1, 00:00:00 (not supported for prior times).
   * @returns {number}
   */
  getTime() {
  }

  /**
   * Sets the Yen value (> 0) for a specified date
   * @param {number} yen
   */
  setYen(yen) {
  }
  /**
   * Sets the Loa value (1-144) for a specified date
   * @param {number} loa
   */
  setLoa(loa) {
  }
  /**
   * Sets the Period value (0-8) for a specified date
   * @param {number} period
   */
  setPeriod(period) {
  }
  /**
   * Sets the Day of Period value (1-based index, upper limit depends on Period)
   * for a specified date
   * @param {number} dayOfPeriod
   */
  setDayOfPeriod(dayOfPeriod) {
  }
  /**
   * Sets the Hour value for a specified date
   * @param {number} hours
   */
  setHours(hours) {
  }
  /**
   * Sets the Minute value for a specified date
   * @param {number} minutes
   */
  setMinutes(minutes) {
  }
  /**
   * Sets the Second value for a specified date
   * @param {number} seconds
   */
  setSeconds(seconds) {
  }
  /**
   * Sets the Millisecond value for a specified date
   * @param {number} milliseconds
   */
  setMilliseconds(milliseconds) {
  }
  /**
   * Sets the time in number of milliseconds since Yestarë, I 1, 00:00:00 (>= 0)
   * for a specified date.
   * @returns {number}
   */
  setTime(time) {
  }

  /**
   * String representation of the specified date.
   * @returns {string}
   */
  toString() {
    return '';
  }

  // Internal Methods

  setElvishDate(yen, loa, period, day) {
    this.yen = yen;
    this.loa = loa;
    this.period = period;
    this.day = day;
  }
  setGregorianDate(date) {
    this.gregorian = date;
    this.convert();
  }
  copyElvishDate(date) {
    this.setElvishDate(date.yen, date.loa, date.period, date.day);
  }
  convert() {
    this.test = 'test';
  }

  setSunset(sunset) {
    this.sunset = sunset;
    return this;
  }
}

export default ElvishDate;
