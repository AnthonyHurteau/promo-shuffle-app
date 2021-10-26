import "./App.css";
import React, { Suspense } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import NavBar from "./components/NavBarComponent";
import PromoShuffle from "./components/PromoShuffleComponent";

function App() {
  const appliedTheme = createTheme(theme);

  return (
    <Suspense fallback="loading">
      <ThemeProvider theme={appliedTheme}>
        <CssBaseline />
        <NavBar />
        <PromoShuffle />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
