import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'


const NavBar = (props) => {
    return (
        <nav id="nav-bar">
            <h2 id="driver-stats-link"><Link to="/driver-stats">Driver Stats</Link></h2>
            <h2 id="compare-drivers-link"><Link to="/compare-drivers">Compare Drivers</Link></h2>
            <h1 id="logo-home"><Link to="/">F1 V</Link></h1>
            <h2 id="track-stats-link"><Link to="/track-stats">Track Stats</Link></h2>
            <h2 id="constructor-stats-link"><Link to="/constructor-stats">Constructor Stats</Link></h2>
        </nav>
    )
}

export default NavBar