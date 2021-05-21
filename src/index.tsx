import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { injectGlobal } from '@emotion/css';

import { App } from 'App';
import store from 'store';

injectGlobal`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 10px;
}

body {
  font-family: league-gothic, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`;

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);
