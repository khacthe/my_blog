import qs from 'qs';

export const getDataRequest = (payload) => {
  const dataRquest = {};
  /* eslint prefer-destructuring: [0, {AssignmentExpression: {array: true}}] */
  if (payload.page) {
    dataRquest.page = payload.page;
  }

  if (payload.sort) {
    const keys = qs.stringify(payload.sort).split('=');
    dataRquest[`sort[${keys[0]}]`] = keys[1];
  }

  if (payload.filter) {
    const mutipleFilters = qs.stringify(payload.filter).split('&');
    mutipleFilters.forEach((filter) => {
      const [key, value] = filter.split('=');
      dataRquest[`filters[${key}]`] = value;
    });
  }

  if (payload.publishing) {
    dataRquest['publishing'] = payload.publishing;
  }

  if (payload.search) {
    const keys = qs.stringify(payload.search).split('=');
    dataRquest[`search[${keys[0]}]`] = payload.search[keys[0]];
  }
  return dataRquest;
};
