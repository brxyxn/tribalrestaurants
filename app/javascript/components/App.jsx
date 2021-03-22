import React from "react";
import { Route, Switch } from "react-router-dom";
import NewRestaurant from "./Restaurant/NewRestaurant";
import Restaurant from "./Restaurant/Restaurant";
import Restaurants from "./Restaurants/Restaurants";
// import NewRestaurant from "./Restaurant/NewRestaurant";

// This document was modified removing the modute to Routes path
// Based on testing it worked more efficiently
const App = () => {
    return(
        <Switch>
            <Route path="/" exact component={Restaurants} />
            <Route path="/view/:id" exact component={Restaurant} />
            <Route path="/new" exact component={NewRestaurant} />
        </Switch>
    )
}
export default App;
