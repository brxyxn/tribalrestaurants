import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
    const [isCollapsed, setIsCollapsed] = useState(true)

    const handleCollapseState = () => setIsCollapsed(!isCollapsed)
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
            <Link to="/" className="navbar-brand">Restaurant Club</Link>
            <button className="navbar-toggler" type="button" data-toggle={`${!isCollapsed ? 'collapse' : ''}`} data-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded={!isCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleCollapseState}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${!isCollapsed ? 'collapsing' : 'collapse'} navbar-collapse`} id="navbarContent">
                <ul className="navbar-nav text-center">
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