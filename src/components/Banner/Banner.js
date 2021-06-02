import React from "react";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Divider from "@material-ui/core/Divider";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";

import { tooltipValue, bannerStepper } from "../../constant";
import { useStyles } from "./bannerStyles";
import "./Banner.css";

function Banner() {
  const classes = useStyles();
  return (
    <div className="banner">
      <div>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <Link className={classes.homeLink} href="/">
            Home
          </Link>
          <Link color="inherit" href="">
            Marketplace
          </Link>
        </Breadcrumbs>
      </div>
      <div className="banner-fullWidth">
        <div className="banner-discover">
          <Typography variant="h4" className={classes.discover}>
            Discover all platforms
          </Typography>

          <Tooltip
            title={<p className="tooltipValue">{tooltipValue}</p>}
            arrow
            className={classes.tooltip}
          >
            <Button variant="contained" className={classes.buttonOnboard}>
              ONBOARD NOW
            </Button>
          </Tooltip>
        </div>
        <Divider />
      </div>
      <div>
        <div className="banner-stepper">
          {bannerStepper.map((elem, index) => (
            <div className="banner-stepper">
              <Typography variant="p" className={classes.numberStyle}>
                {elem.numberValue}
              </Typography>
              {elem.icon}
              <Typography variant="p" className={classes.labelSpan}>
                {elem.value}
              </Typography>
              {index < bannerStepper.length - 1 && (
                <ArrowForwardIosOutlinedIcon className={classes.arrowSize} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;
