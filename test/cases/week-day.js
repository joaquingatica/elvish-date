import assert from 'assert';
import calendar from '../../src/helpers/calendar';
import ElvishDate from '../../src/ElvishDate';

describe('Week Day', function () {
  describe('constructor(yen, loa, period, day)', function () {
    const yen = ElvishDate.yen('XV');
    const loa = 1;
    const period = ElvishDate.periods.METTARE;
    const weekDay = ElvishDate.daysOfWeek.MENELYA;
    it(`weekday for yen ${yen}, loa ${loa}, period ${period} should be`, function () {
      const date = new ElvishDate(yen, loa, period);
      assert.equal(date.getDayOfWeek(), weekDay);
    });
  });
  describe('constructor(yen, loa, period, day)', function () {
    const yen = ElvishDate.yen('XV');
    const loa = 1;
    const period = ElvishDate.periods.HRIVE;
    for (
      let day = 45, weekDay = ElvishDate.daysOfWeek.ELENYA;
      weekDay <= ElvishDate.daysOfWeek.VALANYA;
      day += 1, weekDay += 1
    ) {
      it(`weekday for yen ${yen}, loa ${loa}, period ${period} and day ${day} should be ${calendar.getDayOfWeekName(weekDay)}`, function () {
        const date = new ElvishDate(yen, loa, period, day);
        assert.equal(date.getDayOfWeek(), weekDay);
      });
    }
  });
});
