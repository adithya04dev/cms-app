import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContactProvider } from './context/ContactContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contacts from './components/Contacts';
import AddContact from './components/AddContact';
import ContactDetails from './components/ContactDetails';
// import './index.css';
const App = () => {
  return (
    <ContactProvider>
      <Router>
          <Navbar />
          <div >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/add-contact" element={<AddContact />} />
              <Route path="/contact/:id" element={<ContactDetails />} />
            </Routes>
          </div>
      </Router>
    </ContactProvider>
  );
};

export default App;