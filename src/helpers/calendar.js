import utils from './utils';
import constants from './constants';

// TODO validate and throw exceptions on get... methods

const calendar = {
  getYenNumeral(yen) {
    return utils.getRomanNumeral(yen);
  },
  getPeriodName(period) {
    return constants.periods[period].name;
  },
  getDayOfWeek(date) {
    // TODO
  },
  getDayOfWeekName(dayOfWeek) {
    return constants.daysOfWeek[dayOfWeek];
  },
  getTime(date) {
    // TODO
  },

  // TODO
  setYen(date, yen) {
  },
  setLoa(date, loa) {
  },
  setPeriod(date, period) {
  },
  setDayOfPeriod(date, dayOfPeriod) {
  },
  setHours(date, hours) {
  },
  setMinutes(date, minutes) {
  },
  setSeconds(date, seconds) {
  },
  setMilliseconds(date, milliseconds) {
  },
  setTime(date, time) {
  },

  toString(date) {
    const period = date.getPeriod();
    const dayOfWeek = date.getDayOfWeek();
    const periodName = date.getPeriodName();
    const yenNumeral = date.getYenNumeral();
    const loa = date.getLoa();
    let string = `${dayOfWeek}, ${periodName}`;
    if (!this.isPeriodSingleDay(period)) {
      const dayOfPeriod = date.getDayOfPeriod();
      string += ` ${dayOfPeriod}`;
    }
    string += `, ${yenNumeral} ${loa}`;
    return string;
  },

  isPeriodSingleDay(period) {
    return constants.periods[period].length.standard === 1;
  },
};

export default calendar;
