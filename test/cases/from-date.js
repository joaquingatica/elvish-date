import assert from 'assert';
import ElvishDate from '../../src/ElvishDate';

describe('From Date', function () {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  describe('fromDate()', function () {
    it('should be created for current Date', function () {
      assert.equal(ElvishDate.fromDate().toDate().toString(), today.toString());
    });
  });
  describe('fromDate(int)', function () {
    it('should be created for provided timestamp', function () {
      assert.equal(ElvishDate.fromDate(today.getTime()).toDate().toString(), today.toString());
    });
  });
  describe('fromDate(dateString)', function () {
    it('should be created for provided date string', function () {
      const dateString = today.toString();
      assert.equal(ElvishDate.fromDate(dateString).toDate().toString(), dateString);
    });
  });
  describe('fromDate(year, month[, day[, hours[, minutes[, seconds[, milliseconds]]]]])', function () {
    const dateTmp = today; // new Date();
    const year = dateTmp.getFullYear();
    const month = dateTmp.getMonth();
    const day = dateTmp.getUTCDate();
    const hours = dateTmp.getHours();
    const minutes = dateTmp.getMinutes();
    const seconds = dateTmp.getSeconds();
    const milliseconds = dateTmp.getMilliseconds();
    it('should be created for provided year, month, day, hours, minutes, seconds, milliseconds', function () {
      const date = new Date(year, month, day, hours, minutes, seconds, milliseconds);
      const elvishDate =
        ElvishDate.fromDate(year, month, day, hours, minutes, seconds, milliseconds);
      assert.equal(elvishDate.toDate().toString(), date.toString());
    });
    it('should be created for provided year, month, day, hours, minutes, seconds', function () {
      const date = new Date(year, month, day, hours, minutes, seconds);
      const elvishDate = ElvishDate.fromDate(year, month, day, hours, minutes, seconds);
      assert.equal(elvishDate.toDate().toString(), date.toString());
    });
    it('should be created for provided year, month, day, hours, minutes', function () {
      const date = new Date(year, month, day, hours, minutes);
      const elvishDate = ElvishDate.fromDate(year, month, day, hours, minutes);
      assert.equal(elvishDate.toDate().toString(), date.toString());
    });
    it('should be created for provided year, month, day, hours', function () {
      const date = new Date(year, month, day, hours);
      const elvishDate = ElvishDate.fromDate(year, month, day, hours);
      assert.equal(elvishDate.toDate().toString(), date.toString());
    });
    it('should be created for provided year, month, day', function () {
      const date = new Date(year, month, day);
      const elvishDate = ElvishDate.fromDate(year, month, day);
      assert.equal(elvishDate.toDate().toString(), date.toString());
    });
    it('should be created for provided year, month', function () {
      const date = new Date(year, month);
      const elvishDate = ElvishDate.fromDate(year, month);
      assert.equal(elvishDate.toDate().toString(), date.toString());
    });
  });
  describe('fromDate(Date)', function () {
    it('should be created for provided Date', function () {
      const date = today;
      assert.equal(ElvishDate.fromDate(date).toDate().toString(), date.toString());
    });
  });
});
