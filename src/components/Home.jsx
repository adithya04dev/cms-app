import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Contact Manager</h1>
      <p>Manage your contacts efficiently with our easy-to-use system</p>
      <div>
        <Link to="/contacts"  className="view-button" >View Contacts</Link> {' '}
        <Link to="/add-contact"  className="contact-button" >Add New Contact</Link>
      </div>
    </div>
  );
};

export default Home;