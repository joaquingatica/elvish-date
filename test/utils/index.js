import assert from 'assert';

export default {
  elvishEquals(elvishDate, yen, loa, period, day) {
    assert.equal(elvishDate.yen, yen);
    assert.equal(elvishDate.loa, loa);
    assert.equal(elvishDate.period, period);
    if (day) {
      assert.equal(elvishDate.day, day);
    }
  },
  elvishDateEquals(date1, date2) {
    this.elvishEquals(date2, date2.yen, date2.loa, date2.period, date2.day);
  },
  dateEquals(date1, date2) {
    assert.equal(date1.toString(), date2.toString());
  },
};
