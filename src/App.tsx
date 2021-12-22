import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react';

const App = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        backgroundColor: 'primary.dark',
      }}
    >
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v5 example
        </Typography>
      </Box>
    </Container>
  );
};

export default App;
