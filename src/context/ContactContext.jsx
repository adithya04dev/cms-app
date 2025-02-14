import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/contacts');
      setContacts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      setLoading(false);
    }
  };

  const addContact = async (contact) => {
    try {
      const response = await axios.post('http://localhost:3000/contacts', contact);
      setContacts([...contacts, response.data]);
      return response.data;
    } catch (error) {
      console.error('Error adding contact:', error);
      throw error;
    }
  };

  const getContact = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/contacts/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching contact:', error);
      throw error;
    }
  };

  return (
    <ContactContext.Provider value={{ contacts, loading, addContact, getContact }}>
      {children}
    </ContactContext.Provider>
  );
};
