// Creating Routes from React and importing modules to handle it
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import NewRestaurant from "../components/NewRestaurant";
import Restaurant from "../components/Restaurant/Restaurant";


export default (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/view/:id" exact component={Restaurant} />
            <Route path="/new" exact component={NewRestaurant} />
        </Switch>
    </Router>
);