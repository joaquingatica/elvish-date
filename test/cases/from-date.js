import assert from 'assert';
import ElvishDate from '../../src/ElvishDate';

describe('From Date', function () {
  describe('fromDate()', function () {
    it('should be created for current Date', function () {
      assert.equal(ElvishDate.fromDate().gregorian.toString(), new Date().toString());
    });
  });
  describe('fromDate(int)', function () {
    it('should be created for provided timestamp', function () {
      const date = new Date();
      assert.equal(ElvishDate.fromDate(date.getTime()).gregorian.toString(), date.toString());
    });
  });
  describe('fromDate(dateString)', function () {
    it('should be created for provided date string', function () {
      const dateString = new Date().toString();
      assert.equal(ElvishDate.fromDate(dateString).gregorian.toString(), dateString);
    });
  });
  describe('fromDate(year, month[, day[, hours[, minutes[, seconds[, milliseconds]]]]])', function () {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getUTCDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();
    it('should be created for provided year, month, day, hours, minutes, seconds, milliseconds', function () {
      const gregorianDate = new Date(year, month, day, hours, minutes, seconds, milliseconds);
      const elvishDate =
        ElvishDate.fromDate(year, month, day, hours, minutes, seconds, milliseconds);
      assert.equal(elvishDate.gregorian.toString(), gregorianDate.toString());
    });
    it('should be created for provided year, month, day, hours, minutes, seconds', function () {
      const gregorianDate = new Date(year, month, day, hours, minutes, seconds);
      const elvishDate = ElvishDate.fromDate(year, month, day, hours, minutes, seconds);
      assert.equal(elvishDate.gregorian.toString(), gregorianDate.toString());
    });
    it('should be created for provided year, month, day, hours, minutes', function () {
      const gregorianDate = new Date(year, month, day, hours, minutes);
      const elvishDate = ElvishDate.fromDate(year, month, day, hours, minutes);
      assert.equal(elvishDate.gregorian.toString(), gregorianDate.toString());
    });
    it('should be created for provided year, month, day, hours', function () {
      const gregorianDate = new Date(year, month, day, hours);
      const elvishDate = ElvishDate.fromDate(year, month, day, hours);
      assert.equal(elvishDate.gregorian.toString(), gregorianDate.toString());
    });
    it('should be created for provided year, month, day', function () {
      const gregorianDate = new Date(year, month, day);
      const elvishDate = ElvishDate.fromDate(year, month, day);
      assert.equal(elvishDate.gregorian.toString(), gregorianDate.toString());
    });
    it('should be created for provided year, month', function () {
      const gregorianDate = new Date(year, month);
      const elvishDate = ElvishDate.fromDate(year, month);
      assert.equal(elvishDate.gregorian.toString(), gregorianDate.toString());
    });
  });
  describe('fromDate(Date)', function () {
    it('should be created for provided Date', function () {
      const date = new Date();
      assert.equal(ElvishDate.fromDate(date).gregorian.toString(), date.toString());
    });
  });
});
