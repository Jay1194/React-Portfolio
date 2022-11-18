import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

export default function Header() {
  const displayDesktop = () => {
    return <Toolbar>{femmecubatorLogo}</Toolbar>;
  };

  const femmecubatorLogo = (
    <Typography variant="h6" component="h1">
      Femmecubator
    </Typography>
  );

  return (
    <header>
      <AppBar>{JaydeenTaylor()}</AppBar>
    </header>
  );
}