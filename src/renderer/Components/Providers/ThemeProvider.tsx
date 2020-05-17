import * as React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    gray: "rgb(55,55,55)",
  },
};

const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
