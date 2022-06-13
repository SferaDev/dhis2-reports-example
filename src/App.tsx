import { Global, css } from "@emotion/react";
import Example from "./reports/Example";

const MyApp = () => (
  <>
    <Global
      styles={css`
        body {
          header {
            display: none;
          }
        }
      `}
    />
    <Example />
  </>
);

export default MyApp;
