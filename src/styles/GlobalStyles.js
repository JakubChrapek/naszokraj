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
    scroll-behavior: smooth;
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

    @media only screen and (max-width: 1366px) {
      padding: 0.9rem 0.4rem;
      width: 115px;
      font-size: 1.4rem;
    } 

    @media only screen and (max-width: 767px) {
      padding: 1.1rem 0.7rem;
      width: 130px;
      font-size: 1.4rem;
    } 
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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
      &.underline.short {
        &::after {
          left: 1.6rem;
          width: calc(100% - 3.2rem);
        }
      }
      &:hover::after,
      &:focus::after {
        transform: scaleX(1);
        outline: none;
      }
    }
  }

  .scroll {
    background-color: var(--accent);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    right: 10px;
    bottom: 40px;
    @media only screen and (min-width: 768px) {
      right: 20px;
    }
    position: fixed;
    z-index: 2;
    opacity: 0.65;
    cursor: pointer;
    border-radius: 0;
    width: 40px;
    height: 40px;
    transition: 
      opacity .2s ease-in-out, 
      transform .2s cubic-bezier(0.645, 0.045, 0.355, 1),
      background-color .2s cubic-bezier(0.645, 0.045, 0.355, 1);
    box-shadow: 0 9px 25px 0 rgba(132,128,177,0.28);
    border: none;
    outline: none;
    &:hover {
      background-color: var(--orange);
      opacity: 1;
      transform: scale(1);
      border: none;
      svg {
        transform: scale(1.2);
      }
    }
    svg {
      width: 18px;
      height: 18px;
      fill: white;
      transition: transform .2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }

`;

export default GlobalStyles;