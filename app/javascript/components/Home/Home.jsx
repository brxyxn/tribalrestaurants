// This component will be the new layout router and will include a flexbox grid
import React from "react";
import Navbar from "../Layout/Navbar";

class Home extends React.Component {
    render() {
        return (
            // Need to update layout later
            <main>
                {/* Navbar Layout */}
                <Navbar />

                {/* Next update will create a way to display everything with a working layout and a loader */}
                

                {/* Landing Page Footer */}
                <footer>
                    <p className="display-5 vw-50 text-center">Created by <b>Brayan Lopez</b></p>
                </footer>
            </main>
        );
    }
}

export default Home;