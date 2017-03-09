import moment from 'moment';

class Time {

  constructor(...args) {
    const self = this;
    const now = moment();
    const fields = ['hour', 'minute', 'second', 'millisecond'];
    const argsLength = args.length;
    fields.forEach((field, i) => {
      let value = 0;
      if (argsLength === 0) {
        value = now[field]();
      } else if (argsLength > i) {
        value = args[i];
      }
      self[field] = value;
    });
  }

}

export default Time;