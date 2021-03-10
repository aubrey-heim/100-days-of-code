//import react and react hooks
import React, { useState, useEffect } from "react";
//import Material UI components
import { 
  Box, 
  Grid,
} from "@material-ui/core";
//import custom components
import AdminForm from "../components/AdminForm";
import PassCheck from "../components/PassCheck"
//import routes
import API from "../utils/API";
//initialize Home page
function Home() {
  //set state hooks
  const [authorized, setAuthorized] = useState(false);
  const [adminPass, setAdminPass] = useState("");
  const [authFormData, setAuthFormData] = useState("");
  const [formData, setFormData] = useState({
    dayNumber: null,
    description: "",
    duration: null,
    date: Date.now,
    repo: ""
  });
  //loads the Admin password
  useEffect(() => {
    API.getAdminPass()
    .then(res => {
        setAdminPass(res.data)
    })
    .catch((err) => {
        console.log(err);
    });
  }, []);
  //when admin pass form is submitted, checks password and authorizes user
    const onPassSubmit = () => {
        event.preventDefault();
        if (authFormData === adminPass){
            setAuthorized(true);
            console.log("Authorized")
        } else {
            alert("Incorrect password")
        }
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleAuthChange = event => setAuthFormData(event.target.value);
  //this renders a Homepage that welcomes the user
  return (
    <div>
      {/* Material-UI Box component serves as a wrapper component for most of the CSS utility needs. */}
      <Box>
        {/* The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts. */}
        <Grid container>
            <PassCheck onChange={handleAuthChange} onSubmit={onPassSubmit}/>
        </Grid>
      </Box>
    </div>
  );
}
//exports the Home page
export default Home;
