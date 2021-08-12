import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Details from "./components/Details";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";

const App = () => (
  <BrowserRouter>
    <Navbar />
    <div style={{ marginTop: "100px" }}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details/:brand" component={Details} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
