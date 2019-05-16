import { createGlobalStyle } from 'styled-components';

import colors from './colors';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }
  body {
    color: ${colors.ink};
    background-color: ${colors.darkWhite};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, textarea {
    font-family: 'Source Sans Pro', sans-serif !important;
    font-size: 16px;
  }

  a, button {
    outline: none;
  }

  h1, h2, h3, h4, h5 {
    padding: 12px 0;
  }
  h1 {
    font-size: 42px;
    line-height: 50px;
  }
  h2 {
    font-size: 36px;
    line-height: 40px;
  }
  h3 {
    font-size: 30px;
    line-height: 36px;
  }
  h4 {
    font-size: 26px;
    line-height: 32px;
  }
  h5 {
    font-size: 24px;
    line-height: 30px;
  }
`;

export default GlobalStyle;
