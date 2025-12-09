import React from 'react';
import { Box, Typography, Container, IconButton, Divider } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Email, Favorite } from '@mui/icons-material';

function Footer() {
  const currentYear = new Date().getFullYear();

  // Palette from header
  const deepTeal = "#1A545D";
  const softTeal = "#4E9A8D";
  const darkSlate = "#153548";
  const mint = "#9AE8B7";

  return (
    <Box
      component="footer"
      sx={{
        background: darkSlate, // matching header's dark tone
        color: 'white',
        py: 5,
        mt: 6,
        borderTop: `4px solid ${mint}`, // accent like header's mint
      }}
    >
      <Container maxWidth="lg">

        {/* Copyright */}
        <Typography variant="body1" align="center" sx={{ fontWeight: 500, mb: 1 }}>
          © {currentYear} John Nicoleden Portfolio. All rights reserved.
        </Typography>

        <Typography
          variant="body2"
          align="center"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 0.5,
            opacity: 0.9,
            color: mint,
          }}
        >
   
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
