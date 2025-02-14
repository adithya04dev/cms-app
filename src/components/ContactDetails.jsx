import React, { useContext, useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ContactContext } from '../context/ContactContext';

const ContactDetails = () => {
  const { id } = useParams();
  const { getContact } = useContext(ContactContext);
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const data = await getContact(id);
        setContact(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching contact details:', error);
        setLoading(false);
      }
    };

    fetchContact();
  }, [id, getContact]);

  const contactInfo = useMemo(() => {
    if (!contact) return null;
    return {
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
      description: contact.description
    };
  }, [contact]);

  if (loading) {
    return <div>Loading contact details...</div>;
  }

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
        <h2>{contactInfo.name}</h2>
        <Link to="/contacts" className="back-link">
          Back to Contacts
        </Link>
      </div>

      <div>
        <div>
          <h3>Phone</h3>
          <p>{contactInfo.phone}</p>
        </div>

        <div>
          <h3>Email</h3>
          <p>{contactInfo.email}</p>
        </div>

        <div>
          <h3>Description</h3>
          <p>{contactInfo.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;