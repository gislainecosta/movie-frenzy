import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
  --black: #21252b;
  --light-blue: #b4bbd583;
  --blue: #b4bbd5;
  --white: #fafcff;
  }

  body {
  color: var(--white);
  background-color: var(--black);
  padding: 2rem;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  }

  body, input, textarea, button {
    font-family: 'Quicksand', 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
  }

  button {
    cursor: pointer;
    &:hover:not([disabled]) {
      transform: scale(1.05);
    }

    &:active:not([disabled]) {
      transform: scale(0.95);
    }
  }

  input {
    &:focus {
      box-shadow: 0 0 0 0;
      border: var(--blue)
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }


  [disabled] {
    opacity: 0.2;
    cursor: not-allowed
  }

  ::-webkit-scrollbar {
    width: .2rem;
  }

  ::-webkit-scrollbar-track {
    background-color: #343b44;
    border-radius: 10rem;
  }

  ::-webkit-scrollbar-thumb {
    background: #b4bbd562;
    border-radius: 10rem;
  }
`;
