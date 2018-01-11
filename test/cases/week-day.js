import assert from 'assert';
import ElvishDate from '../../src/ElvishDate';

describe('Week Day', function () {
  describe('constructor(yen, loa, period, day)', function () {
    const yen = 15;
    const loa = 1;
    const period = 8;
    const weekDay = 4;
    it(`weekday for yen ${yen}, loa ${loa}, period ${period} should be`, function () {
      const date = new ElvishDate(yen, loa, period);
      assert.equal(date.getDayOfWeek(), weekDay);
    });
  });
  describe('constructor(yen, loa, period, day)', function () {
    const yen = 15;
    const loa = 1;
    const period = 6;
    const day = 50;
    const weekDay = 5;
    it(`weekday for yen ${yen}, loa ${loa}, period ${period} and day ${day} should be`, function () {
      const date = new ElvishDate(yen, loa, period, day);
      assert.equal(date.getDayOfWeek(), weekDay);
    });
  });
});
