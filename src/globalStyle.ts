import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
  --black: #21252b;
  --beige: #e9e4d3;
  --white: #fafcff;
  }

  body {
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  color: var(--white);
  background-color: var(--black);
  }

  body, input, textarea, button {
    font-family: 'Quicksand', 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  input {
    background-color: transparent !important;
  }

  button {
    &:hover:not([disabled]) {
      transform: scale(1.05);
    }

    &:active:not([disabled]) {
      transform: scale(0.95);
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }


  [disabled] {
    opacity: 0.6;
    cursor: not-allowed
  }
`;
