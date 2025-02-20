import React, { useContext, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ContactContext } from '../context/ContactContext';
import { 
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  Container,
  Pagination,
  Stack
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Divider from '@mui/material/Divider';

const CONTACTS_PER_PAGE = 5;

const Contacts = () => {
  const { contacts } = useContext(ContactContext);
  const [page, setPage] = useState(1);
  
  const sortedContacts = useMemo(() => {
    return [...contacts].sort((a, b) => a.name.localeCompare(b.name));
  }, [contacts]);

  // Calculate pagination
  const totalPages = Math.ceil(sortedContacts.length / CONTACTS_PER_PAGE);
  const startIndex = (page - 1) * CONTACTS_PER_PAGE;
  const paginatedContacts = sortedContacts.slice(
    startIndex,
    startIndex + CONTACTS_PER_PAGE
  );

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{display: 'flex',justifyContent: 'space-between',alignItems: 'center', mb: 4,mt: 2 }}      >
        <Typography variant="h4" >
          Contacts
        </Typography>
        <Button component={Link} to="/add-contact"  variant="contained"  startIcon={<PersonAddIcon />}  sx={{ borderRadius: 2 }}>
          Add New Contact
        </Button>
      </Box>

      <Box >
        {paginatedContacts.map((contact) => (
          <Accordion sx={{mb: 1}} >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}
            >
              <Typography variant="h6">{contact.name}</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Card   component={Link}  to={`/contact/${contact.id}`}  sx={{   textDecoration: 'none',   display: 'block', }}   >
                <CardContent>
                  <Typography variant="body1" color="text.secondary">
                    {contact.description}
                  </Typography>
                </CardContent>
              </Card>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      { (
        <Stack spacing={2} alignItems="center" sx={{ mt: 3, mb: 3 }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            color="secondary"

          />
        </Stack>
      )}
    </Container>
  );
};

export default Contacts;