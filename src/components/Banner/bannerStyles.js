import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  homeLink: {
    color: "#ff8100",
  },
  discover: {
    fontSize: "2.5em",
    fontWeight: 600,
    color: "#535151",
  },
  buttonOnboard: {
    backgroundColor: "#ffc800",
    borderRadius: 30,
    fontWeight: 600,
    padding: 10,
    width: "15em",
    float: "right",
    "&:hover": {
      backgroundColor: "#ffc800",
    },
  },
  numberStyle: {
    fontFamily: "'Bungee Inline', cursive",
    fontSize: "2em",
    color: "#6b9fff",
  },
  globe: {
    fontSize: "2.75em",
  },
  labelSpan: {
    fontSize: "1.5em",
    color: "#535151",
  },
  arrowSize: {
    fontSize: "2.75em",
    fontWeight: 600,
    color: "#898989",
  },
}));
