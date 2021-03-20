// Creating Routes from React and importing modules to handle it
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Restaurant from "../components/Restaurant";

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:id" exact component={Restaurant} />
        </Switch>
    </Router>
);