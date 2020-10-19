import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --orange: #EF5F38;
    --black: #020A13;
    --white: #FEF9F8;
    --accent: #F4673A;
    --grey: #efefef;
  }
  html {
    font-size: 10px;
  }

  body {
    font-size: 2rem;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--orange);
    color: white;
    border: 0;
    padding: 1.2rem 0.8rem;
    width: 150px;
    cursor: pointer;
    transition: all 0.2s;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 8px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--orange) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--orange) ;
    border-radius: 0px;
    border: 3px solid var(--white);
    border-right: 0;
    border-top: 0;
  }

  img {
    max-width: 100%;
  }

`;

export default GlobalStyles;