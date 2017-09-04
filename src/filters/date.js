import moment from 'moment';

export default {
  name: 'dateFormat',
  implementation: value => {
    if (value) {
      return moment(String(value)).format('DD/MM/YY');
    }
  }
};
