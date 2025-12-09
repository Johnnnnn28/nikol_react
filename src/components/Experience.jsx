import React from 'react';
import { Card, CardContent, Typography, Divider, List, ListItem, ListItemIcon, ListItemText, Box, Avatar } from '@mui/material';
import { Work } from '@mui/icons-material';

function Experience() {
  const experiences = [
    {
      title: 'Back-End & Database Developer',
      company: 'Mini-Capstone Project: CARWASA',
      period: 'A.Y. 2025 - 2026',
      description:
        'Developed the back-end of CARWASA, a water service management web application. ' +
        'Handled API creation, data processing, and system logic. Designed and optimized the SQL Server database, ensuring efficient data structure and secure user authentication. ' +
        'Contributed heavily to system reliability, data flow, and overall functionality of the platform.'
    },
    {
      title: 'Developer & Documentation Lead',
      company: 'Mini-Research Project: Waste Uh-Uh!',
      period: 'A.Y. 2024 - 2025',
      description:
        'Led major parts of the project documentation, including research writing, system rationale, and workflow. ' +
        'Simultaneously developed the back-end features and managed the database structure, ensuring the system aligned with research objectives and performed smoothly. ' +
        'Played a key role in bridging both technical and academic requirements of the project.'
    }
  ];

  return (
    <Card
      sx={{
        mb: 4,
        borderRadius: 3,
        overflow: 'hidden',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.12)'
        }
      }}
    >

      {/* HEADER SECTION LIKE ABOUT CARD */}
      <Box
        sx={{
          background: '#153548',
          p: 3,
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <Avatar
          sx={{
            bgcolor: 'white',
            color: '#153548',
            width: 56,
            height: 56
          }}
        >
          <Work sx={{ fontSize: 32 }} />
        </Avatar>

        <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>
          Experience
        </Typography>
      </Box>

      {/* CONTENT SECTION */}
      <CardContent sx={{ p: 4 }}>
        <List>
          {experiences.map((exp, index) => (
            <ListItem
              key={index}
              alignItems="flex-start"
              sx={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                mb: index < experiences.length - 1 ? 2 : 0
              }}
            >
              <ListItemText
                primary={
                  <Typography variant="h6" color="#153548" sx={{ fontWeight: 600 }}>
                    {exp.title}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography component="span" variant="body2" color="text.primary">
                      {exp.company} • {exp.period}
                    </Typography>
                    <br />
                    {exp.description}
                  </>
                }
              />

              {index < experiences.length - 1 && (
                <Divider sx={{ mt: 2, width: '100%' }} />
              )}
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default Experience;
