import * as React from "react";
import { render } from "react-dom";
import DAW from "./Components/DAW/DAW";
import ThemeProvider from "./Components/Providers/ThemeProvider";
import "./styles.css";

function App() {
  return (
    <ThemeProvider>
      <DAW />
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("app");
render(<App />, rootElement);
