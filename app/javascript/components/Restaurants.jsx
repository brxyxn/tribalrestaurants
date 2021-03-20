import React from 'react';
import { Link } from "react-router-dom";

// This class has a constructor that is initializing a state object to hold
// the state of each restaurant, initializing an empty array (JSON response).
class Restaurants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurants: []
        };
    }

    // Getting a JSON response from Index with all objects and 
    // handling error if response comes with an error.
    componentDidMount() {
        const url = "/api/v1/restaurants/index";
        fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Returning an error from JSON response while getting all posts.");
        })
        .then(response => this.setState({ restaurants: response }))
        .catch(() => this.props.history.push("/"));
    }

    // Rendering all restaurants using and map to pass everyone with a 
    // card style using Bootstrap Styles with the JSON response from BackEnd.
    render() {
        const { restaurants } = this.state;
        const allRestaurants = restaurants.map(( restaurant, index ) => (
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card text-dark bg-light mg-3">
                    <img src={restaurant.logo} alt={`${restaurant.name} logo`} className="card-img-top" />
                    <div className="card-body">
                        <h4 className="card-title">{restaurant.name}</h4>
                        <p className="card-text">{restaurant.description}</p>
                        <Link to={`/${restaurant.id}`} className="btn btn-primary" role="button">Let's go</Link>
                    </div>
                </div>
            </div>
        ));

        // Render an option to create a new restaurant if we don't have one yet.
        const noRestaurant = (
            <div className="vw-100">
                <h4>No restaurants yet. Why not <Link to="/new_restaurant">create one</Link></h4>
            </div>
        );
        
        // Returning either all restaurants or noRestaurant objects
        return (
            <section className="restaurant-list bg-light d-flex justify-content-center">
                <div className="col-10 d-flex row d-flex justify-content-around">
                    {restaurants.length > 0 ? allRestaurants : noRestaurant}
                </div>
            </section>
        )
    }
}

export default Restaurants;

