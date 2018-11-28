import number   from 'shared/lib/queryResolvers/number';

/*
  this object is used in both the initialState and the history interface to determine what a
  valid state for a query is. The resolvers basically:

  - Return null, or an empty array, for blank or undefined values
  - Return normalized versions of their input otherwise
*/

export default {
  pageNumber          : number,
  pageSize            : number,
};
