import assert from 'assert';
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
    const day = 50;
    const weekDay = ElvishDate.daysOfWeek.VALANYA;
    it(`weekday for yen ${yen}, loa ${loa}, period ${period} and day ${day} should be`, function () {
      const date = new ElvishDate(yen, loa, period, day);
      assert.equal(date.getDayOfWeek(), weekDay);
    });
  });
});
