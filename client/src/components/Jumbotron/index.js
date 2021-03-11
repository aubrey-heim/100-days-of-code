//import react
import React from "react";
//import Material-Ui function
import { makeStyles } from "@material-ui/core/styles";
//import Material-Ui components
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
//initialize useStyles variable that uses Material-UI's styling solution makeStyles() function
const useStyles = makeStyles({
  root: {
    marginTop:"10px",
    minWidth: 275,
    marginBottom: "10px",
    backgroundImage: `url(https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`,
    backgroundSize: "100%"
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "rgba(204, 204, 204, 0.5)"
  },
  date: {
    fontSize:25,
    textAlign: "center",
    backgroundColor: "rgba(204, 204, 204, 0.5)",
  }
});
//export and initialize the Jumbotron component that is handed down props
export default function Jumbotron(props) {
  //initialize the classes variable with our useStyles hook
  const classes = useStyles();
  //destructures props
  const {hours, minutes} = props
  //this returns a jumbotron with a background image that welcomes users to the site by name and displays todays date. 
  return (
    //Material-UI's Card component contain content and actions about a single subject
    <Card className={classes.root} variant="outlined">
      {/* Material-UI's CardContent component is used to create the "body" of a card component */}
      <CardContent>
        {/* Material-UI's Typography component allows you to present your design and content as clearly and efficiently as possible. */}
        <Typography className={classes.title} gutterBottom>
          Aubrey Heim 100 Days of Code
        </Typography>
        <Typography className={classes.date} gutterBottom>
          {`Time Spent Coding ${hours} hours ${minutes} minutes`}
        </Typography>
      </CardContent>
    </Card>
  );
}