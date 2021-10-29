import "./App.css";
import React, { useState, Suspense } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import NavBar from "./components/NavBarComponent";
import PromoShuffle from "./components/PromoShuffleComponent";

function App() {
  const [reset, setReset] = useState(false);

  const appliedTheme = createTheme(theme);

  return (
    <Suspense fallback="loading">
      <ThemeProvider theme={appliedTheme}>
        <CssBaseline />
        <NavBar setReset={setReset} />
        {reset === false ? (
          <PromoShuffle
            reset={reset}
            setReset={setReset} />
        ) : null}
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
