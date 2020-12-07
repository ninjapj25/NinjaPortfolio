import { Grid } from "@material-ui/core";
import React from "react";
import SideNavigation from "./components/sidenav/SideNavigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Works from "./components/works/Works";

function App() {
  return (
    <BrowserRouter>
      <Grid container={true}>
        <SideNavigation />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/NinjaPortfolio" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/works" component={Works} />
        </Switch>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
