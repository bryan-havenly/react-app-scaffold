import * as actionTypes from 'historyRoutingBased/constants/actionTypes';

export default {
  set: query => ({
    type: actionTypes.SET_QUERY,
    query,
  }),
};
