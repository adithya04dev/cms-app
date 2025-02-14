import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/add-contact">Add Contact</Link>
    </nav>
  );
}

export default Navbar;