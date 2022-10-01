import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    letter-spacing: 0.6px;
    font-family: 'Roboto', sans-serif;
  }
`;
