import React from 'react';
import { Card, CardContent, Typography, Grid, Box, Chip, Avatar, Divider } from '@mui/material';
import { Code, Storage, Build, Web, EmojiObjects, Speed, Gamepad } from '@mui/icons-material';

function Skills() {
  const technicalSkills = [
    { 
      category: 'Frontend', 
      items: ['JavaScript', 'HTML/CSS'],
      icon: <Web />,
      color: '#153548'
    },
    { 
      category: 'Backend', 
      items: ['Python', 'Java', 'C++'],
      icon: <Code />,
      color: '#153548'
    },
    { 
      category: 'Database', 
      items: ['MySQL'],
      icon: <Storage />,
      color: '#153548'
    },
    { 
      category: 'Tools', 
      items: ['Git', 'VS Code', 'Figma'],
      icon: <Build />,
      color: '#153548'
    }
  ];

  const softSkills = [
    {
      title: 'Flexibility',
      icon: <EmojiObjects />,
      color: '#153548',
      description: 'I excel at adapting to changing requirements and new technologies. Whether it\'s switching between different programming languages, adjusting to new project methodologies, or learning unfamiliar frameworks, I embrace change as an opportunity for growth. My ability to pivot quickly while maintaining quality and meeting deadlines makes me a valuable team player in dynamic development environments.'
    },
    {
      title: 'Spatial Awareness',
      icon: <Gamepad />,
      color: '#153548',
      description: 'My strong spatial awareness enables me to visualize complex UI/UX layouts, component hierarchies, and system architectures before implementation. This skill helps me design intuitive user interfaces, optimize responsive designs across different screen sizes, and understand how different components interact within a larger system. It allows me to anticipate potential layout issues and create more efficient, user-friendly applications.'
    },
    {
      title: 'Typing Skills',
      icon: <Speed />,
      color: '#153548',
      description: 'With exceptional typing speed and accuracy, I can efficiently translate ideas into code, significantly boosting my productivity during development. Fast typing skills allow me to focus more on problem-solving and logic rather than the mechanics of coding, enabling rapid prototyping, quick debugging sessions, and seamless communication through written documentation and code comments.'
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
          <Code sx={{ fontSize: 32 }} />
        </Avatar>
        <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>
          Skills & Technologies
        </Typography>
      </Box>
      <CardContent sx={{ p: 4 }}>
        {/* Technical Skills Section */}
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#153548', mb: 3 }}>
          Technical Skills
        </Typography>
        <Grid container spacing={3} sx={{ mb: 5 }}>
          {technicalSkills.map((skillSet, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box 
                sx={{ 
                  p: 3,
                  borderRadius: 2,
                  bgcolor: '#f8f9fa',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: skillSet.color,
                    transform: 'translateY(-5px)',
                    '& .MuiTypography-root': {
                      color: 'white'
                    },
                    '& .MuiChip-root': {
                      bgcolor: 'white',
                      color: skillSet.color
                    }
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                  <Avatar sx={{ bgcolor: skillSet.color, width: 40, height: 40 }}>
                    {skillSet.icon}
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: skillSet.color }}>
                    {skillSet.category}
                  </Typography>
                </Box>
                <Box>
                  {skillSet.items.map((skill, idx) => (
                    <Chip 
                      key={idx} 
                      label={skill} 
                      size="small"
                      sx={{ 
                        m: 0.5,
                        bgcolor: 'white',
                        fontWeight: 500,
                        transition: 'all 0.3s ease'
                      }} 
                    />
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Soft Skills Section */}
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#153548', mb: 3 }}>
          Professional Strengths
        </Typography>
        <Grid container spacing={3}>
          {softSkills.map((skill, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box 
                sx={{ 
                  p: 3,
                  borderRadius: 2,
                  bgcolor: '#f8f9fa',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  border: '2px solid transparent',
                  '&:hover': {
                    borderColor: skill.color,
                    transform: 'translateY(-5px)',
                    boxShadow: `0 8px 24px ${skill.color}40`
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Avatar sx={{ bgcolor: skill.color, width: 48, height: 48 }}>
                    {skill.icon}
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: skill.color }}>
                    {skill.title}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  {skill.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Skills;