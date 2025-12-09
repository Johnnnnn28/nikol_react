import React from 'react';
import { Container, CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import ProfileBanner from './components/ProfileBanner';
import About from './components/About';
import Skills from './components/Skills';
import Interest from './components/Interest';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',

        // Aurora-inspired background using your palette
        background: `
          linear-gradient(
            180deg,
            #153548 0%,      /* dark slate sky */
            #1A545D 35%,     /* deep teal */
            #4E9A8D 65%,     /* soft teal */
            #9AE8B7 100%     /* mint glow near bottom */
          )
        `,
        backgroundAttachment: 'fixed', // subtle parallax effect
      }}
    >
      <CssBaseline />
      <Header />

      <Container
        maxWidth="lg"
        sx={{
          py: 6,
          color: '#eaf7f3',                // soft readable text tint
        }}
      >
        {/* Profile Section */}
        <Box id="profile" sx={{ py: 6 }}>
          <ProfileBanner />
        </Box>

        {/* About Section */}
        <Box id="about" sx={{ py: 6 }}>
          <About />
        </Box>

        {/* Skills Section */}
        <Box id="skills" sx={{ py: 6 }}>
          <Skills />
        </Box>

        {/* Interest Section */}
        <Box id="interest" sx={{ py: 6 }}>
          <Interest />
        </Box>

        {/* Experience Section */}
        <Box id="experience" sx={{ py: 6 }}>
          <Experience />
        </Box>

        {/* Education Section */}
        <Box id="education" sx={{ py: 6 }}>
          <Education />
        </Box>

        {/* Projects Section */}
        <Box id="project" sx={{ py: 6 }}>
          <Projects />
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}

export default App;
