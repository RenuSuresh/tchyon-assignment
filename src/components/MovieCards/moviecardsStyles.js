import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 120,
    width: "100%",

    paddingTop: "56.25%", // 16:9
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  mediaCard: {
    display: "inline-flex",
    width: "fit-content",
  },
  content: {
    textAlign: "left",
  },
}));
