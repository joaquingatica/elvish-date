import assert from 'assert';
import utils from './utils';
import ElvishDate from '../src/ElvishDate';

describe('New Instance', function() {
  describe('constructor()', function() {
    it('should be created for current Date', function() {
      utils.gregorianEquals(new ElvishDate().gregorian, new Date());
    });
  });
  describe('constructor(yen, loa, period)', function() {
    const yen = "XV";
    const loa = 120;
    const period = 1;
    it(`should be created for yen ${yen}, loa ${loa} and period ${period}`, function() {
      const date = new ElvishDate(yen, loa, period);
      utils.dateEquals(date, yen, loa, period);
    });
  });
  describe('constructor(yen, loa, period, day)', function() {
    const yen = "XIV";
    const loa = 119;
    const period = 2;
    const day = 3;
    it(`should be created for yen ${yen}, loa ${loa}, period ${period} and day ${day}`, function() {
      const date = new ElvishDate(yen, loa, period, day);
      utils.dateEquals(date, yen, loa, period, day);
    });
  });
  describe('constructor(ElvishDate)', function() {
    it('should be created for provided Elvish Date', function() {
      const yen = "XIV";
      const loa = 119;
      const period = 2;
      const day = 3;
      const elvishDate = new ElvishDate(yen, loa, period, day);
      const date = new ElvishDate(elvishDate);
      utils.elvishEquals(date, elvishDate);
    });
  });
  describe('constructor(Date)', function() {
    it('should be created for provided Date', function() {
      const gregorianDate = new Date();
      const date = new ElvishDate(gregorianDate);
      utils.gregorianEquals(date.gregorian, gregorianDate);
    });
  });
});