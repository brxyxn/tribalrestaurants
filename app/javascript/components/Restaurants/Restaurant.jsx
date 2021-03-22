// This document renders each Post to the LandingPage
// www.example.com/#index
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

// This class has a constructor that is initializing a state object to hold
// the state of each restaurant, initializing an empty array (JSON response).
const Restaurant = () => {
    const [restaurants, setRestaurants] = useState([])
    const [show, setShow] = useState(false)

    // Getting a JSON response from Index with all objects and 
    // handling error if response comes with an error.
    useEffect(() => {
        const url = `/api/v1/restaurants`
        axios.get(url)
        .then(response => {
            setRestaurants(response.data.data)
        })
    }, [restaurants.length])

    // Adding addHtmlEntities method to replace all HTML opening and closing brackets.
    const addHtmlEntities = (str) => {
        return(str)
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
    }

    // We will use this timer of 1second just to let the component load and process
    // the condition of listRestaurants
    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 1000)
    }, [])

    let listRestaurants
    if (restaurants && restaurants.length > 0){
        listRestaurants = restaurants.map(post => {
            return(
                <Link to={`/view/${post.id}`} key={post.id} className="col-lg-4 col-md-6 col-sm-12 box hvr-push">
                    <div className="card text-dark bg-light mg-3">
                        <div className="card-img-top">
                            <img src={post.attributes.logo} alt={`${post.attributes.name} logo`} className="card-img-top"/>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">{post.attributes.name}</h4>
                            <div className="card-text" dangerouslySetInnerHTML={{__html: `${addHtmlEntities(post.attributes.description)}`}} />
                        </div>
                    </div>
                </Link>
            )
        })
    } else {
        listRestaurants = (
            <div className="vw-100">
                <h4>There are no restaurants yet. Let's <Link to="/new">create a new</Link> one</h4>
            </div>
        )
    }

    if(!show) return null
    return (
        <section className="restaurant-list bg-light d-flex justify-content-center">
            <div className="w-90 d-flex box-wrap">
                {listRestaurants}
            </div>
        </section>
    )
}

export default Restaurant;