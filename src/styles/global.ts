import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  ::root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #ffffff;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialisaed;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  //font-size: 16px (desktop)
  html {
    @media (max-with:1080px) {
      font-size: 93.75%; // 16 * 0,9375 = 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 16 * 0,875 = 14px;
    }
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

`;
