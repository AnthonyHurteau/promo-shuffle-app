import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";

import iconWhite from "../images/icon_white.png";
import sigWhite from "../images/sig_white.png";

export default function NavBar(props) {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ position: "absolute" }}
          onClick={() => {
            props.setReset(true);
          }}
        >
          <img
            src={iconWhite}
            alt="Logo"
            height="30"
            width="30" />
        </Button>
        <img
          src={sigWhite}
          alt="sig"
          style={{ margin: "auto", display: "block" }}
          height="47"
          width="187"
        />
      </Toolbar>
    </AppBar>
  );
}
