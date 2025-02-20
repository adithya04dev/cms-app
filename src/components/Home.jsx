import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Typography, Stack } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 5 }}>
      <Typography variant="h3" >
        Welcome to Contact Manager
      </Typography>
      <Typography variant="body1" sx={{mb:3, mt: 2} }>
        Manage your contacts efficiently with our easy-to-use system.
      </Typography>


      <Stack spacing={2} direction="row" justifyContent="center">
        <Button component={Link} to="/contacts" variant="contained" color='secondary'>
          View Contacts
        </Button>
        <Button component={Link} to="/add-contact" color="primary" variant="contained">
          Add New Contact
        </Button>
      </Stack>
    </Container>
  );
};

export default Home;
