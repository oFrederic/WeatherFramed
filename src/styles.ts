import { injectGlobal } from '@emotion/css';

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
