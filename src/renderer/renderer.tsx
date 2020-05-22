import * as React from "react";
import { render } from "react-dom";
import DAW from "./Components/DAW/DAW";
import ThemeProvider from "./Components/Providers/ThemeProvider";
import { FileTreeProvider } from "./Components/Providers/FileTreeProvider";
import "./styles.css";

function App() {
  return (
    <FileTreeProvider>
      <ThemeProvider>
        <DAW />
      </ThemeProvider>
    </FileTreeProvider>
  );
}

const rootElement = document.getElementById("app");
render(<App />, rootElement);
