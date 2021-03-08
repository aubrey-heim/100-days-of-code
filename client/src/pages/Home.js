//import react and react hooks
import React, { useState, useEffect } from "react";
//import Material UI components
import { 
  Box, 
  Grid,
} from "@material-ui/core";
//import custom components

//import routes
import API from "../utils/API";
import RecapCard from "../components/RecapCard";
//initialize Home page
function Home() {
  //set state hooks
  const [recaps, setRecaps] = useState([]);
  //gets the recaps from the database on page load
  useEffect(() => {
    getRecaps();
  }, []);
  //this gets all the recaps and sets it to recaps state
  const getRecaps = () => {
    API.getRecaps()
      .then(res => {
        setRecaps(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err));
  };
  //this renders a Homepage that welcomes the user
  return (
    <div>
      {/* Material-UI Box component serves as a wrapper component for most of the CSS utility needs. */}
      <Box>
        {/* The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts. */}
        <Grid container>
          {recaps.map(recap => <RecapCard key={recap._id} {...recap} />)}
        </Grid>
      </Box>
    </div>
  );
}
//exports the Home page
export default Home;
