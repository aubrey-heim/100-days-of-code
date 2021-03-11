import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Admin from "./pages/Admin"
import NoMatch from "./pages/NoMatch";
import { Container } from "@material-ui/core";
import Footer from "./components/Footer"


function App() {

  return (
    <Router>
      <div>
        <Container>
          <Switch>
            <Route exact path={["/", "/home"]}>
              <Home />
            </Route>
            <Route exact path={["/admin"]}>
              <Admin/>
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
