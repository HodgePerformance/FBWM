import React from "react";
import "./styles/App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Dashboard from "./components/dashboard/Dashboard";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark"
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "#191919"
      }
    },
  }
});

function App() {
  return (
    <MuiThemeProvider theme={darkTheme}>
      <div className="App">
        <header className="App-header">
          <Dashboard />
        </header>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
