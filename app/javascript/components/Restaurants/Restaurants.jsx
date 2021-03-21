// www.example.com/#index
// Creating Home component for the Landing Page, this will contain all the restaurants 'view' buttons
import React from "react";
// Importing Restaurants Object to render the returned result from BackEnd into the Landingpage
import Restaurant from './Restaurant';
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

class Restaurants extends React.Component {
    render() {
        return (
            // Need to update layout later
            <main>
                {/* Navbar Layout */}
                <Navbar />

                {/* Landing Page Header */}
                <header className="d-flex flex-column primary-color d-flex align-items-center justify-content-center">
                    <div className="col-12 vw-100 jumbotron jumbotron-fluid bg-transparent">
                        <div className="container secondary-color text-center">
                            <h1 className="display-4">Restaurant Club</h1>
                            <p className="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum veritatis quia, adipisci quidem numquam amet dolorem, laboriosam corporis dignissimos esse laudantium ducimus repudiandae repellat nobis sint, quasi dolorum debitis eum.</p>
                        </div>
                    </div>
                </header>

                {/* Rendering Restaurant list */}
                <Restaurant />

                {/* Landing Page Footer */}
                <Footer />
            </main>
        );
    }
}

export default Restaurants;