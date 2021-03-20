// Creating Home component for the Landing Page, this will contain all the restaurants 'view' buttons
import React from "react";
import { Link } from "react-router-dom";
// Importing Restaurants Object to render the returned result from BackEnd into the Landingpage
import Restaurants from '../components/Restaurants';

class Home extends React.Component {
    render() {
        return (
            <main>
                {/* Landing Page Header */}
                <header className="d-flex flex-column primary-color d-flex align-items-center justify-content-center">
                    <div className="col-12 vw-100 jumbotron jumbotron-fluid bg-transparent">
                        <div className="container secondary-color text-center">
                            <h1 className="display-4">Restaurant Club</h1>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum veritatis quia, adipisci quidem numquam amet dolorem, laboriosam corporis dignissimos esse laudantium ducimus repudiandae repellat nobis sint, quasi dolorum debitis eum.</p>
                            <hr className="my-4"/>
                            <Link to="/restaurant" className="btn btn-lg custom-button" role="button">New Restaurant</Link>
                        </div>
                    </div>
                </header>

                {/* Rendering Restaurant list */}
                <Restaurants />

                {/* Landing Page Footer */}
                <footer>
                    <p className="display-5 vw-50 text-center">Created by <b>Brayan Lopez</b></p>
                </footer>
            </main>
        );
    }
}

export default Home;