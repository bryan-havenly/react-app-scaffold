import { AppContainer }     from 'react-hot-loader';
import { Provider }         from 'react-redux';
import { render }           from 'react-dom';
import App                  from 'components/App';
import React                from 'react';
import store                from './store';
import globalActions        from './actionCreators/global';

module.exports = (targetEl, data) => {
  store.dispatch(globalActions.load(data));

  const renderApp = AppComponent => {
    render(
      <Provider store={ store }>
        <AppContainer>
          <AppComponent rootEl={ targetEl } />
        </AppContainer>
      </Provider>,
      targetEl,
    );
  };

  if (module.hot) {
    module.hot.accept('./components/App', () => {
      renderApp(require('./components/App').default);
    });
  }

  renderApp(App);
};
