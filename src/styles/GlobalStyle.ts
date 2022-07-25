import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *{
    box-sizing: border-box;
  }
  button{
    cursor: pointer;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
  html {
    @media screen and (max-width: 1440px) {
      font-size: 14px;
    }
    @media screen and (max-width: 1024px) {
      font-size: 12px;
    }
    @media screen and (max-width: 768px) {
      font-size: 10px;
    }
  }
`;

export default GlobalStyle;
