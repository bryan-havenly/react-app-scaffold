import historyInstance from 'historyRoutingBased/lib/historyInstance';
import store           from 'historyRoutingBased/store';

export default (passedQuery) => {
  const plainQuery = store.getState().get('query').toJS();
  const newQuery   = Object.assign(plainQuery, passedQuery);
  const newUri     = historyInstance.getUriFromQueryObject(newQuery);

  historyInstance.goToUri(newUri);
};
