import React from "react";
import logo from "./images/logo.svg";
import "./styles/App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  }
});

function App() {
  return (
    <MuiThemeProvider ovider theme={darkTheme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
