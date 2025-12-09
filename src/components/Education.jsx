import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Divider, 
  List, 
  ListItem, 
  ListItemText, 
  Box, 
  Avatar 
} from '@mui/material';
import { School } from '@mui/icons-material';

function Education() {
  const education = [
    {
      degree: 'Bachelor of Science in Information Technology',
      school: 'Cebu Technological University - Argao Campus',
      period: 'Present',
      details: 'Currently pursuing the Bachelor of Science in Information Technology program.'
    },
    {
      degree: 'Senior High School – HUMSS',
      school: 'Casay National High School',
      period: '2022 - 2023',
      details: 'Graduated With High Honors. Major in Humanities and Social Sciences.'
    },
    {
      degree: 'Elementary',
      school: 'Casay Elementary School',
      period: '2015 - 2016',
      details: 'Graduated as part of the Academic Achievers.'
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

      {/* Header like About card */}
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
          <School sx={{ fontSize: 32 }} />
        </Avatar>

        <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>
          Education
        </Typography>
      </Box>

      {/* Content */}
      <CardContent sx={{ p: 4 }}>
        <List>
          {education.map((edu, index) => (
            <ListItem
              key={index}
              alignItems="flex-start"
              sx={{
                flexDirection: 'column',
                alignItems: 'flex-start',
                mb: index < education.length - 1 ? 2 : 0
              }}
            >
              <ListItemText
                primary={
                  <Typography variant="h6" sx={{ color: '#153548', fontWeight: 600 }}>
                    {edu.degree}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography component="span" variant="body2" color="text.primary">
                      {edu.school} • {edu.period}
                    </Typography>
                    <br />
                    {edu.details}
                  </>
                }
              />

              {index < education.length - 1 && (
                <Divider sx={{ mt: 2, width: '100%' }} />
              )}
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default Education;
