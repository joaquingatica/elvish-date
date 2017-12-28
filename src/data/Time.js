import moment from 'moment';

class Time {

  getHour() {
    return this.hour || 0;
  }
  getMinute() {
    return this.minute || 0;
  }
  getSecond() {
    return this.second || 0;
  }
  getMillisencond() {
    return this.millisecond || 0;
  }

  /**
   * constructor()
   *    - current time
   * constructor(hour[, minute[, [second[, millisecond]]])
   *    - time for specified parameters, others default to 0
   * @param args
   */
  constructor(...args) {
    const self = this;
    const now = moment();
    const fields = ['hour', 'minute', 'second', 'millisecond'];
    const argsLength = args.length;
    fields.forEach((field, i) => {
      let value = 0;
      if (argsLength === 0) {
        value = now[field]();
      } else if (i < argsLength) {
        value = args[i];
      } else {
        value = 0;
      }
      self[field] = value;
    });
  }

}

export default Time;
