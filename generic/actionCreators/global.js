import * as actionTypes     from 'newApp/constants/actionTypes';

export default {
  load: data => ({
    type: actionTypes.LOAD_DATA,
    data,
  }),
};
