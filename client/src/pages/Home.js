//import react and react hooks
import React, { useState, useEffect } from "react";
//import Material UI components
import { 
  Box, 
  Grid,
} from "@material-ui/core";
//import custom components
import RecapCard from "../components/RecapCard";
import Jumbotron from "../components/Jumbotron";
//import routes
import API from "../utils/API";
//initialize Home page
function Home() {
  //set state hooks
  const [recaps, setRecaps] = useState([]);
  const [hours, setHours] = useState();
  const [minutes, setMinutes] =useState();
  //gets the recaps from the database on page load
  useEffect(() => {
    getRecaps();
  }, []);
  //this gets all the recaps and sets it to recaps state
  const getRecaps = () => {
    API.getRecaps()
      .then(res => {
        setRecaps(res.data)
        let duration=0;
        let tempHours;
        let tempMinutes;
        res.data.forEach(recap => {
          duration=duration+recap.duration
          tempHours = Math.floor(duration / 60)
          tempMinutes = duration - tempHours*60
          setHours(tempHours)
          setMinutes(tempMinutes)
        })
      })
      .catch(err => console.log(err));
  };
  //this renders a Homepage that welcomes the user
  return (
    <div>
      <Jumbotron hours={hours} minutes={minutes}/>
      {/* Material-UI Box component serves as a wrapper component for most of the CSS utility needs. */}
      <Box>
        {/* The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts. */}
        <Grid container>
          {recaps.map(recap => {
            return(
              <Grid key={recap._id} item xs={12} md={6}>
                <RecapCard  {...recap} />
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </div>
  );
}
//exports the Home page
export default Home;
