import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontSize: theme.spacing(3),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,

    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  inputRoot: {
    color: "white",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    "& .MuiFilledInput-underline:before": {
      borderBottomColor: orange[600],
    },
    "& .MuiInputBase-root": { color: "white" },
    "& .MuiFilledInput-underline:after": { borderBottomColor: orange[400] },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{ backgroundColor: orange[700] }} position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h1" noWrap>
            Shark Notes
          </Typography>
          <TextField
            className={classes.inputRoot}
            placeholder="Search"
            variant="filled"
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
