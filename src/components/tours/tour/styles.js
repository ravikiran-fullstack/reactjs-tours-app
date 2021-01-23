import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    margin: "40px 0",
  },
  media: {
    height: "333px",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));
