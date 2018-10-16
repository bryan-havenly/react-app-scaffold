import HistoryInterface    from 'shared/lib/HistoryInterface';
import queryActionCreators from 'historyRoutingBased/actionCreators/query';
import queryResolvers      from 'historyRoutingBased/lib/queryResolvers';
import store               from 'historyRoutingBased/store';

const historyInstance = new HistoryInterface();

historyInstance.init({
                    // NOTE. Will be changed to an action in next PR.
  getItems          : () => {},
  getTitleFromQuery : (query, baseTitle) => baseTitle,
  handleRootPath    : true,
  queryResolvers,
  rootPath          : '/havenly-consult/queue',
  setQuery          : queryActionCreators.set,
  store,
});

export default historyInstance;
