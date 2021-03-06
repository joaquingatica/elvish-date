import calendar from './helpers/calendar';
// eslint-disable-next-line import/no-cycle
import convert from './helpers/converter';
import definitions from './helpers/definitions';
import constants from './helpers/constants';
import utils from './helpers/utils';

// TODO validate and throw exceptions on set... methods

class ElvishDate {
  // TODO constructor(yen, loa, period[, day[, hour[, minute[, second[, millisecond]]]]])
  /**
   * constructor()<br />
   * constructor(Date)<br />
   * constructor(ElvishDate)<br />
   * constructor(attributes)<br />
   * constructor(yen, loa, period[, day])<br />
   *
   * @param {Date|ElvishDate|Object|number} [args]
   */
  constructor(...args) {
    this.initializeAttributes();
    if (args.length <= 0) {
      this.convertFromDate(new Date());
    } else {
      const firstArg = args[0];
      if (firstArg instanceof Date) {
        this.convertFromDate(firstArg);
      } else if (firstArg instanceof ElvishDate) {
        this.copyElvishDate(firstArg);
      } else if (typeof firstArg === 'object') {
        this.setAttributes(firstArg);
      } else {
        const attributes = ElvishDate.parseConstructorArguments(...args);
        this.setAttributes(attributes);
      }
    }
  }

  /**
   * Number of arguments handled by constructor (4)
   * @type {number}
   */
  static get length() {
    return 4;
  }

  /**
   * Constants for periods<br />
   * {YESTARE: 0, TUILE: 1, LAIRE: 2, YAVIE: 3, ENDERI: 4,
   * QUELLE: 5, HRIVE: 6, COIRE: 7, METTARE: 8}
   * @type {{YESTARE: number, TUILE: number, LAIRE: number, YAVIE: number,
   * ENDERI: number, QUELLE: number, HRIVE: number, COIRE: number, METTARE: number}}
   */
  static get periods() {
    return definitions.periods;
  }

  /**
   * Constants for days of week<br />
   * {ELENYA: 0, ANARYA: 1, ISILYA: 2, ALDUYA: 3, MENELYA: 4, VALANYA: 5}
   * @type {{ELENYA: number, ANARYA: number, ISILYA: number,
   * ALDUYA: number, MENELYA: number, VALANYA: number}}
   */
  static get daysOfWeek() {
    return definitions.daysOfWeek;
  }

  /**
   * Helper for getting number for Roman Numeral of Yen
   * @param {string} romanNumeral
   * @returns {number}
   */
  static yen(romanNumeral) {
    return utils.getIntFromRomanNumeral(romanNumeral);
  }

  /**
   * Accepts same arguments as the standard Date constructor, or accepts a Date instance<br />
   * fromDate()<br />
   * fromDate(int)<br />
   * fromDate(dateString)<br />
   * fromDate(year, month[, day[, hours[, minutes[, seconds[, milliseconds]]]]])<br />
   * fromDate(Date)
   *
   * @param {number|string|Object} [args]
   * @returns {ElvishDate}
   */
  static fromDate(...args) {
    let date;
    if (args.length === 1 && args[0] instanceof Date) {
      // eslint-disable-next-line prefer-destructuring
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
    return ElvishDate.fromDate(new Date()).getTime();
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
   * Return the number of Day of the Loa (1-based index) for the specified date
   * @returns {number}
   */
  getDayOfLoa() {
    const yen = this.getYen();
    const loa = this.getLoa();
    const period = this.getPeriod();
    const dayOfPeriod = this.getDayOfPeriod();
    return calendar.calculateDayOfLoa(yen, loa, period, dayOfPeriod);
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
    const yen = this.getYen();
    const loa = this.getLoa();
    const dayOfLoa = calendar.calculateDayOfLoa(yen, loa, this.getPeriod(), this.getDayOfPeriod());
    return calendar.calculateDayOfWeek(yen, loa, dayOfLoa);
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
  /* getHours() {
    return this.hour;
  } */
  /**
   * Return the number of the Minute for the specified date
   * @returns {number}
   */
  /* getMinutes() {
    return this.minute;
  } */
  /**
   * Return the number of the Second for the specified date
   * @returns {number}
   */
  /* getSeconds() {
    return this.second;
  } */
  /**
   * Return the number of the Millisecond for the specified date
   * @returns {number}
   */
  /* getMilliseconds() {
    return this.millisecond;
  } */

  /**
   * Returns the numeric value of the specified date as the number of milliseconds
   * since Yestarë, I 1, 00:00:00 (not supported for prior times).
   * @returns {number}
   */
  getTime() {
    // TODO Extend to use elvish milliseconds, not regular
    return convert.getAsDate(this).getTime();
  }

  /**
   * Sets the Yen value (> 0) for a specified date
   * @param {number} yen
   */
  setYen(yen) {
    this.yen = yen;
  }

  /**
   * Sets the Loa value (1-144) for a specified date
   * @param {number} loa
   */
  setLoa(loa) {
    this.loa = loa;
  }

  /**
   * Sets the Period value (0-8) for a specified date
   * @param {number} period
   */
  setPeriod(period) {
    this.period = period;
  }

  /**
   * Sets the Day of Period value (1-based index, upper limit depends on Period)
   * for a specified date
   * @param {number} dayOfPeriod
   */
  setDayOfPeriod(dayOfPeriod) {
    this.day = dayOfPeriod;
  }

  /**
   * Sets the Hour value for a specified date
   * @param {number} hours
   */
  /* setHours(hours) {
    this.hour = hours;
  } */
  /**
   * Sets the Minute value for a specified date
   * @param {number} minutes
   */
  /* setMinutes(minutes) {
    this.minute = minutes;
  } */
  /**
   * Sets the Second value for a specified date
   * @param {number} seconds
   */
  /* setSeconds(seconds) {
    this.second = seconds;
  } */
  /**
   * Sets the Millisecond value for a specified date
   * @param {number} milliseconds
   */
  /* setMilliseconds(milliseconds) {
    this.millisecond = milliseconds;
  } */
  /**
   * Sets the time in number of milliseconds since Yestarë, I 1, 00:00:00 (>= 0)
   * for a specified date.
   * @returns {number}
   */
  setTime(time) {
    // TODO Extend to use elvish milliseconds, not regular
    const date = new Date(time);
    const elvishDate = convert.getFromDate(date);
    this.copyElvishDate(elvishDate);
  }

  /**
   * String representation of the specified date.
   * @returns {string}
   */
  toString() {
    const period = this.getPeriod();
    const dayOfWeekName = this.getDayOfWeekName();
    const periodName = this.getPeriodName();
    const yenNumeral = this.getYenNumeral();
    const loa = this.getLoa();
    let string = `${dayOfWeekName}, ${periodName}`;
    if (!calendar.isPeriodSingleDay(period)) {
      const dayOfPeriod = this.getDayOfPeriod();
      string += ` ${dayOfPeriod}`;
    }
    string += `, ${yenNumeral} ${loa}`;
    return string;
  }

  /**
   * Get current ElvishDate as Date
   * @returns {Date}
   */
  toDate() {
    return convert.getAsDate(this);
  }

  // Internal Methods

  static parseConstructorArguments(...args) {
    const keys = constants.attributes;
    const values = {};
    if (args && args.length > 0) {
      args.forEach((value, i) => {
        values[keys[i]] = value;
      });
    }
    return values;
  }

  initializeAttributes() {
    this.setAttributes({
      yen: null,
      loa: null,
      period: null,
      day: null,
      /* hour: null,
      minute: null,
      second: null,
      millisecond: null, */
    });
  }

  setAttributes(attributes) {
    this.setYen(attributes.yen);
    this.setLoa(attributes.loa);
    this.setPeriod(attributes.period);
    this.setDayOfPeriod(attributes.day);
    /* this.setHours(attributes.hour);
    this.setMinutes(attributes.minute);
    this.setSeconds(attributes.second);
    this.setMilliseconds(attributes.millisecond); */
  }

  getAttributes() {
    return {
      yen: this.getYen(),
      loa: this.getLoa(),
      period: this.getPeriod(),
      day: this.getDayOfPeriod(),
      /* hour: this.getHours(),
      minute: this.getMinutes(),
      second: this.getSeconds(),
      millisecond: this.getMilliseconds(), */
    };
  }

  copyElvishDate(date) {
    this.setAttributes(date);
  }

  convertFromDate(date) {
    const elvish = convert.getFromDate(date);
    this.copyElvishDate(elvish);
  }
}

export default ElvishDate;
