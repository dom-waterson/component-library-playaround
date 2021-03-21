import React from "react";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globals";

import theme from "../styles/theme";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
