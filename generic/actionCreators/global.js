import * as actionTypes from 'generic/constants/actionTypes';

export default {
  load: data => ({
    type: actionTypes.LOAD_DATA,
    data,
  }),
};
