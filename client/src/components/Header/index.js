//import react, useState, and useEffect methods
import React, { useState, useEffect } from "react";
//import routes
import API from "../../utils/API";
//initialize Header component
function Header() {
  //set state hooks
  const [hours, setHours] = useState();
  const [minutes, setMinutes] =useState();
  //gets the recaps from the database on page load
  useEffect(() => {
    API.getRecaps()
      .then(res => {
        let duration=0;
        let tempHours;
        let tempMinutes;
        res.data.forEach(recap => {
          console.log(recap)
          duration=duration+recap.duration
          console.log(duration)
          tempHours = Math.floor(duration / 60)
          tempMinutes = duration - tempHours*60
          setHours(tempHours)
          setMinutes(tempMinutes)
        })
      })
      .catch(err => console.log(err));
  }, []);
  //this returns the site header
  return (
    <nav
      id="headingNav"
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
        backgroundColor: "#cacacc",
        padding: "5px"
      }}
    >
      <h1><a href="/home">Aubrey Heim 100 Days of Code</a></h1>
      <h2>{`Time Spent Coding ${hours} hours ${minutes} minutes`}</h2>
    </nav>
  );
}
//export HeadingNav component
export default Header;
