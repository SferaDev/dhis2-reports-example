import { createGlobalStyle } from "styled-components";
import Example from "./reports/Example";

const MyApp = () => (
  <>
    <GlobalStyle />
    <Example />
  </>
);

export default MyApp;

const GlobalStyle = createGlobalStyle`
  body {
    header {
        display: none;
    }
  }
`;
