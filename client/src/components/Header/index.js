//import react, useState, and useEffect methods
import React, { useState, useEffect } from "react";
//import Link from react-router-dom
import { Link } from "react-router-dom";
//initialize Header component
function Header() {
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
      <h1>Aubrey Heim</h1>
      <Link to="/home">
        <h1>100 Days of code Challenge</h1>
      </Link>
    </nav>
  );
}
//export HeadingNav component
export default Header;
