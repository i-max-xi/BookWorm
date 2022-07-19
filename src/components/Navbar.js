import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';
import logo from '../planet.png';

const Navbar = () => (
  <header>
    <nav>
      <div className="logoContainer">
        <img src={logo} alt="planet app logo" className="logo" />
        <h1>
          <NavLink to="/">Space Traveler&apos;s Hub</NavLink>
        </h1>
      </div>
      <ul className="navLinks">
        <li>
          <NavLink to="/">Rockets</NavLink>
        </li>
        <li>
          <NavLink to="missions">Missions</NavLink>
        </li>
        <li>
          <div className="divider" />
        </li>
        <li>
          <NavLink to="profile">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
