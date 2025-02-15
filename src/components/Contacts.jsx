import React, { useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ContactContext } from '../context/ContactContext';

const Contacts = () => {
  const { contacts, loading } = useContext(ContactContext);

  const sortedContacts = useMemo(() => {
    return [...contacts].sort((a, b) => a.name.localeCompare(b.name));
  }, [contacts]);



  return (
    <div>
      <div >
        <h2 >Contacts</h2>
        <Link
          to="/add-contact"
          className="button-link"
        >
          Add New Contact
        </Link>
      </div>
      <div class='contact-list' >
        {sortedContacts.map((contact) => (
          <div className="contact-container" >
          <Link
            key={contact.id}
            to={`/contact/${contact.id}`}
            // className="contact-card-details"
          >
            <h3 >{contact.name}</h3>
            <p >{contact.description}</p>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;