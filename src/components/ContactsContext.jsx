import { createContext, useState, useEffect, useContext } from 'react';

const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/contacts')
      .then(res => res.json())
      .then(setContacts)
      .catch(console.error);
  }, []);

  const addContact = async (contact) => {
    const response = await fetch('http://localhost:3001/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(contact)
    });
    const newContact = await response.json();
    setContacts(prev => [...prev, newContact]);
  };

  return (
    <ContactsContext.Provider value={{ contacts, addContact }}>
      {children}
    </ContactsContext.Provider>
  );
};

export const useContacts = () => useContext(ContactsContext);