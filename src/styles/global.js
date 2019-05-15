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

  .global-button {
      border: none;
      border-radius: 3px;
      color: white;
      font-size: 14px;
      font-weight: bold;
      padding: 5px;
      width: 174px;
      cursor: pointer;
  }
  .global-button-blue {
    background-color: ${colors.blue};
    :hover {
      background-color: ${colors.darkerBlue};
    }
  }
  .global-button-green {
    background-color: ${colors.green};
    :hover {
      background-color: ${colors.darkerGreen};
    }
  }
  .global-button-red {
    background-color: ${colors.red};
    :hover {
      background-color: ${colors.darkerRed};
    }
  }

  .global-checkbox {
    display: flex;
    padding: 10px;

    > input[type='checkbox'] {
      border-radius: 4px;
      width: 20px;
      height: 20px;
      appearance: none;
      outline: 0;
      background: ${colors.darkestWhite};
      margin-left: 15px;
      margin-right: 10px;

      :checked {
        background: ${colors.blue};
      }
    }
  }

  .global-search-box {
    display: flex;
    align-items: center;
    flex-direction: row;
    border: 1px solid ${colors.darkestWhite};
    background-color: ${colors.darkerWhite};
    border-radius: 3px;
    padding: 10px;
    width: 100%;
    max-width: 300px;

    > i {
      font-weight: 900;
      color: ${colors.lighterInk};
    }

    > input {
      border: none;
      background-color: ${colors.darkerWhite};
      width: 100%;
      margin-left: 10px;
    }
  }
`;

export default GlobalStyle;
