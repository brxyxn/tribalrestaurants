import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
            <Link to="/" className="navbar-brand">Restaurant Club</Link>
            <div className="nav-links">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/new" className="btn btn-outline-primary">Create</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;