// Creating Home component for the Landing Page, this will contain all the restaurants 'view' buttons
import React from "react";
import { Link } from "react-router-dom";

export default () => (
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
        <div className="jumbotron jumbotron-fluid bg-transparent">
            <div className="container secondary-color">
                <h1 className="display-4">Restaurant List</h1>
                <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum veritatis quia, adipisci quidem numquam amet dolorem, laboriosam corporis dignissimos esse laudantium ducimus repudiandae repellat nobis sint, quasi dolorum debitis eum.</p>
                <hr className="my-4"/>
                <Link to="/restaurants" className="btn btn-lg custom-button" role="button">View Restaurants</Link>
            </div>
        </div>
    </div>
);