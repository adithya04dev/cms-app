import React, { useContext, useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ContactContext } from '../context/ContactContext';
import { useNavigate } from 'react-router-dom';

const ContactDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { getContact,deleteContact } = useContext(ContactContext);
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      
    
      try {
        const data = await getContact(id);
        setContact(data);
      } catch (error) {
        console.error('Error fetching contact details:', error);
      }

    };
    fetchContact();

  }, [id, getContact]);

  const handleDelete = async () => {
    try{
      await deleteContact(id);
      navigate('/contacts');
    } catch (error) {
      console.error('Error deleting contact:', error);
    }


  };

  if (!contact) {
    return (
      <div>
        <p>Contact not found</p>
        <Link to="/contacts" className="back-link">
          Back to Contacts
        </Link>
      </div>
    );
  }

  return (
    <div className="contact-details-container">
      <div>
        <h2>{contact.name}</h2>
        <Link to="/contacts" className="back-link">
          Back to Contacts
        </Link>
      </div>

      <div>
        <div>
          <h3>Phone</h3>
          <p>{contact.phone}</p>
        </div>

        <div>
          <h3>Email</h3>
          <p>{contact.email}</p>
        </div>

        <div>
          <h3>Description</h3>
          <p>{contact.description}</p>
        </div>
      </div>
      <button onClick={handleDelete}>Delete Contact</button>

    </div>
  );
};

export default ContactDetails;