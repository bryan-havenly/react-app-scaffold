import * as propTypes           from 'historyRoutingBased/constants/propTypes';
import containerFactory         from 'historyRoutingBased/containers/factory';
import React, { PureComponent } from 'react';
import styles                   from './styles';

export default containerFactory(
  class App extends PureComponent {
    static propTypes = {
      query : propTypes.query.isRequired,
    }

    render() {
      const {
        query,
      } = this.props;

      return (
        <div className={ styles.Root }>
          Put stuff here
        </div>
      );
    }
  }
);
