import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #020A13;
    --blackText: #2B2B2D;
    --white: #FEF9F8;
    --orange: #FF6600;
    --accent: #F05D05;
    --grey: #434343;
    --lightGrey: #9F9F9F;
    --lightestGrey: #F1F2F3;
    --brown: #3E1F08;
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
    border: 2px solid var(--orange);
    padding: 1.5rem 0.8rem;
    font-weight: 600;
    width: 160px;
    cursor: pointer;
    transition: 
    opacity 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
    color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
    background-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
    transform 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
    border 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    font-size: 1.8rem;

    &.white {
      background: var(--white);
      border: 2px solid var(--white);
      color: var(--orange);
      &:focus, &:hover {
        background: var(--orange);
        color: var(--white);
        border: 2px solid var(--orange);
      }
    }
    &:focus, &:hover {
      outline: none;
      background: var(--white);
      color: var(--orange);
      border: 2px solid var(--white);
      &.border {
        border-color: var(--orange);
      }
    }
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 10px;
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
  }

  img {
    max-width: 100%;
  }

  *, *+* {
    margin: 0;
  }
  a {
    text-decoration: none;
    position: relative;
    &.underline {
      outline: none;
      transition: color .2s cubic-bezier(0.645, 0.045, 0.355, 1);
      &::after {
        content: '';
        position: absolute;
        left: 0rem;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: var(--accent);
        transform: scaleX(0);
        transform-origin: left center;
        transition: transform .2s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
      &:hover::after,
      &:focus::after {
        transform: scaleX(1);
        outline: none;
      }
    }
  }

`;

export default GlobalStyles;