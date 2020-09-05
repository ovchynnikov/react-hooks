import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => (
    <nav className="navbar navbar-dark bg-primary navbar-expand-lg p-3">
        <div className="navbar-nav">
        <NavLink exact to="/" className="nav-link active" ><h4>Github Search</h4></NavLink> 
        </div>
        <ul className="navbar-nav">
            <li className="navbar-item">
                <NavLink exact to="/" className="nav-link" > Home</NavLink>
            </li>
            <li className="navbar-item">
                <NavLink to="/about" className="nav-link" > About</NavLink>
            </li>
            <li className="navbar-item">
                <a className="nav-link" href="https://www.linkedin.com/in/oleksii-ovchynnikov-159675129/">My LinkedIn</a>
            </li>

        </ul>
    </nav>
)