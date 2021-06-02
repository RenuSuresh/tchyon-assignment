import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Sidebar from "../Sidebar/Sidebar";
import AutoSearch from "../Search/AutoSearch";
import "./Layout.css";
import { useStyles } from "./layoutStyles";
import Banner from "../Banner/Banner";

export default function Layout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Tchyon
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Banner />
        <AutoSearch />
      </main>
    </div>
  );
}
