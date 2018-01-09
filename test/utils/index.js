import assert from 'assert';

export default {
  dateEquals(elvishDate, yen, loa, period, day) {
    assert.equal(elvishDate.yen, yen);
    assert.equal(elvishDate.loa, loa);
    assert.equal(elvishDate.period, period);
    if (day) {
      assert.equal(elvishDate.day, day);
    }
  },
  elvishEquals(date1, date2) {
    this.dateEquals(date2, date2.yen, date2.loa, date2.period, date2.day);
  },
  dateEquals(date1, date2) {
    assert.equal(date1.toString(), date2.toString());
  },
};
