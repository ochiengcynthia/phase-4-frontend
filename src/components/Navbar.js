import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <NavLink exact to="/" style={{ color: "BLACK", padding: "10px", margin: "auto" }} activeStyle={{ color: "BLUE" }}>
        Home
      </NavLink>
      <NavLink to="/About" style={{ color: "BLACK", padding: "10px", margin: "auto" }} activeStyle={{ color: "BLUE" }}>
        About
      </NavLink>
      <NavLink to="/Animals" style={{ color: "BLACK", padding: "10px", margin: "auto" }} activeStyle={{ color: "BLUE" }}>
        Animals
      </NavLink>
      <NavLink to="/Centers" style={{ color: "BLACK", padding: "10px", margin: "auto" }} activeStyle={{ color: "BLUE" }}>
        Centers
      </NavLink>
      <NavLink to="/Adoptions" style={{ color: "BLACK", padding: "10px", margin: "auto" }} activeStyle={{ color: "BLUE" }}>
        Adoptions
      </NavLink>
    </div>
  );
}

export default Navbar;
