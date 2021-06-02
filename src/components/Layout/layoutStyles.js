import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },

  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  buttonOnboard: {
    backgroundColor: "#ffc800",
    borderRadius: 22,
    fontWeight: 600,
    padding: 10,
    width: "15em",
    float: "right",
    "&:hover": {
      backgroundColor: "#ffc800",
    },
  },
}));
const drawerWidth = 240;
