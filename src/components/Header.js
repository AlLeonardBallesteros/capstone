import React, { useState } from "react";
import {FaPaw} from 'react-icons/fa'
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
      <FaPaw className='icon'/>
        PawDopt
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li>
          <NavLink to="/how-to">How to</NavLink>
        </li>
        <li>
          <NavLink to="/join-us">Join us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header