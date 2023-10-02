import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";

function Navbar() {
    return (
        <div className={'navbar-container'}>
            <div className={'navbar'}>
                <div>
                    <Link to="/">Cindify</Link>
                </div>
                <div>
                    <Link to="/search">Search</Link>
                </div>
                <div>
                    <Link to="/artists">Artists</Link>
                </div>
                <div>
                    <Link to="/albums">Albums</Link>
                </div>
                <div>
                    <Link to="/genres">Genres</Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
