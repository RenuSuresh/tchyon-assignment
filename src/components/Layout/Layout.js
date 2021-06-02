import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

import Sidebar from "../Sidebar/Sidebar";
import AutoSearch from "../Search/AutoSearch";
import { tooltipValue } from "../../constant";
import "./Layout.css";
import { useStyles } from "./layoutStyles";

export default function Layout() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Tychon
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Tooltip
          title={<p className="tooltipValue">{tooltipValue}</p>}
          arrow
          className={classes.tooltip}
        >
          <Button variant="contained" className={classes.buttonOnboard}>
            ONBOARD NOW
          </Button>
        </Tooltip>
        <AutoSearch />
      </main>
    </div>
  );
}
