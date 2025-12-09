import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Avatar, Box, Button } from '@mui/material';

function Header() {
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['profile', 'about', 'skills', 'interest', 'experience', 'education', 'project'];
      let current = 'profile';

      sections.forEach((section) => {
        const elem = document.getElementById(section);
        if (elem && window.scrollY >= elem.offsetTop - 100) {
          current = section;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const elem = document.getElementById(id);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  };

  const navItems = [
    { id: 'profile', label: 'Portfolio' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'interest', label: 'Interest' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'project', label: 'Projects' },
  ];

  // palette
  const deepTeal = "#1A545D";
  const softTeal = "#4E9A8D";
  const darkSlate = "#153548";
  const mint = "#9AE8B7";
  const mauve = "#605056";
  const brown = "#817063";

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: 'rgba(26, 84, 93, 0.25)', // deep teal tint glass
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)',
        borderBottom: `1px solid rgba(78, 154, 141, 0.4)`, // soft teal border
      }}
    >
      <Toolbar sx={{ py: 1 }}>

        {/* Logo + Title */}
        <Box
          sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          onClick={() => handleScrollTo('profile')}
        >
          <Avatar
            src="profile.jpg"
            alt="Profile"
            sx={{
              mr: 1.5,
              width: 48,
              height: 48,
              border: `2px solid ${mint}`,
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.1)' },
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              letterSpacing: 1,
              color: mint,
            }}
          >
            Portfolio
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {/* Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          {navItems
            .filter((item) => item.id !== 'profile')
            .map((item) => (
              <Button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                sx={{
                  color: activeSection === item.id ? mint : '#e0f5ef',
                  fontWeight: activeSection === item.id ? 700 : 400,
                  borderBottom: activeSection === item.id 
                    ? `2px solid ${mint}` 
                    : '2px solid transparent',
                  '&:hover': {
                    bgcolor: 'rgba(78,154,141,0.25)', // soft teal hover
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                {item.label}
              </Button>
            ))}
        </Box>

      </Toolbar>
    </AppBar>
  );
}

export default Header;
