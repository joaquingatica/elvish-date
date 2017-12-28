class ElvishDate {

  /**
   * constructor()
   * constructor(yen, loa, period) - for single day periods
   * constructor(yen, loa, period, day) - for multi day periods
   * constructor(ElvishDate)
   * constructor(Date)
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
}

export default ElvishDate;
