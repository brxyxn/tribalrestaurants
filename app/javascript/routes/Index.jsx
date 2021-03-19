// Creating Routes from React and importing modules to handle it
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";

export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
    </Router>
);