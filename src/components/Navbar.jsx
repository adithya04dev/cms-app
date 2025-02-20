import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900], // Dark grey color for navbar
    },
  },
});

function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/contacts">Contacts</Button>
          <Button color="inherit" component={Link} to="/add-contact">Add Contact</Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;
