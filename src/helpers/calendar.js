import utils from './utils';
import constants from './constants';

// TODO validate and throw exceptions on get... methods

const calendar = {
  getYenNumeral(yen) {
    return utils.getRomanFromNumber(yen);
  },
  getPeriodName(period) {
    return constants.periods[period].name;
  },
  getDayOfWeekName(dayOfWeek) {
    return constants.daysOfWeek[dayOfWeek];
  },

  isPeriodSingleDay(period) {
    return constants.periods[period].length.standard === 1;
  },
  isLeapLoa(loa) {
    return loa % 12 === 0;
  },

  calculatePeriodAndDayOfPeriod(loa, dayOfLoa) {
    const periods = constants.periods;
    const isLeap = this.isLeapLoa(loa);
    let period = 0;
    let dayOfPeriod = dayOfLoa;
    let end = false;
    while (!end && (period < periods.length)) {
      const periodLengths = periods[period].length;
      const periodLength = isLeap ? periodLengths.leap : periodLengths.standard;
      if (dayOfPeriod <= periodLength) { // is in period 'period'
        end = true;
      } else { // is not in period 'period'
        dayOfPeriod -= periodLength;
        period += 1;
      }
    }
    const ret = { period, dayOfPeriod };
    return ret;
  },
  calculatePeriod(loa, dayOfLoa) {
    return this.calculatePeriodAndDayOfPeriod(loa, dayOfLoa).period;
  },
  calculateDayOfPeriod(loa, dayOfLoa) {
    return this.calculatePeriodAndDayOfPeriod(loa, dayOfLoa).dayOfPeriod;
  },
  calculateYestare(yen, loa) {
    let yestare;
    // get array for current yen
    const yenMap = constants.yestareMap[yen - 1];
    // find period of yen for given loa, and get yestare for first range
    let yestareMap = -1;
    let exit = false;
    let i = 0;
    let loaMap;
    while (i < yenMap.length && !exit) {
      loaMap = yenMap[i];
      if ((loaMap.begins <= loa) && (loa <= loaMap.ends)) {
        yestareMap = loaMap.yestareMarchDay;
        exit = true;
      }
      i += 1;
    }
    // calculate appropriate yestare
    const mod = loa % 12;
    if (mod === 0) {
      yestare = yestareMap;
    } else if (mod <= 3) {
      yestare = yestareMap + 3;
    } else if (mod <= 7) {
      yestare = yestareMap + 2;
    } else {
      yestare = yestareMap + 1;
    }
    return yestare;
  },
  calculateYestareDayOfWeek(yen, loa) {
    const offsetRegular = -1;
    const offsetLeap = 2;
    const firstYestareDayOfWeek = constants.firstYestareDayOfWeek;

    const totalLoar = (yen * 144) + (loa - 1);
    const totalLeapLoar = Math.floor(totalLoar / 12);
    const totalRegularLoar = totalLoar - totalLeapLoar;

    const offsetFromLeap = offsetLeap * totalLeapLoar;
    const offsetFromRegular = offsetRegular * totalRegularLoar;
    const totalOffsetDays = offsetFromLeap + offsetFromRegular;
    const totalOffsetWeekDays = totalOffsetDays % 6;

    let yestareDayOfWeek = (firstYestareDayOfWeek - 1) + totalOffsetWeekDays;
    if (yestareDayOfWeek >= 0) {
      yestareDayOfWeek %= 6;
    } else {
      yestareDayOfWeek = (6 - ((-yestareDayOfWeek) % 6));
    }
    yestareDayOfWeek += 1;

    return yestareDayOfWeek;
  },
  calculateDayOfLoa(yen, loa, period, dayOfPeriod) {
    const isLeapLoa = this.isLeapLoa(loa);
    const periods = constants.periods;
    let daysOfLoa = 0;
    for (let i = 0; i < period; i += 1) {
      const periodInfo = periods[i];
      daysOfLoa += isLeapLoa ? periodInfo.length.leap : periodInfo.length.standard;
    }
    daysOfLoa += this.isPeriodSingleDay(period) ? 1 : dayOfPeriod;
    return daysOfLoa;
  },
  calculateWeek(yen, loa, dayOfLoa) {
    const weekDayOfYestare = this.calculateYestareDayOfWeek(yen, loa);
    const dayOfWeek = this.calculateDayOfWeek(yen, loa, dayOfLoa);
    const week = Math.floor((dayOfLoa + (6 - dayOfWeek) + (weekDayOfYestare - 1)) / 6);
    return week;
  },
  calculateDayOfWeek(yen, loa, dayOfLoa) {
    const weekDayOfYestare = this.calculateYestareDayOfWeek(yen, loa);
    const dayOfWeek = (weekDayOfYestare + (dayOfLoa - 1)) % 6;
    return dayOfWeek;
  },
};

export default calendar;
