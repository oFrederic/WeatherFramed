import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './styles.ts';

import { App } from 'App';
import store from 'store';

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);
