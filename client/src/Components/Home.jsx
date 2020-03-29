import React, { Component } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Login from "./Login/LoginPanel.jsx"
import SignUpForm from "./Login/SignUpForm.jsx"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  title: {
    flexGrow: 1,
    marginLeft: 5
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Sign Up</Button>
          <Button color="inherit">Sign In</Button>
        </Toolbar>
      </AppBar>
      <SignUpForm />
      <Login />
    </div>
  );
}
