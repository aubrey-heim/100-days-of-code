//import react
import React from "react";
//import Material-Ui functions
import { makeStyles } from "@material-ui/core/styles";
//initialize useStyles variable that uses Material-UI's styling solution makeStyles() function
const useStyles = makeStyles({
  root: {
    textAlign: "center",
    position: "fixed",
    left: "0",
    bottom: "0",
    width: "100%",
    backgroundColor: "black",
    padding: 15,
    color:"white"
  },
  phantom: {
    height: "100px",
    display: "block",
    width: "100%",
  },
});
//initialize and export the Footer component
export default function Footer() {
  ///initialize the classes variable with our useStyles hook
  const classes = useStyles();
  //this returns a copyright logo to the landing page
  return (
    <div>
      <div className={classes.phantom} />
      <div className={classes.root}>&#169; Aubrey Heim 2021</div>
    </div>
  );
}
