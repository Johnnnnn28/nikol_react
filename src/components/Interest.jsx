import React from 'react';
import { Card, CardContent, Typography, Divider, Box, Avatar } from '@mui/material';
import { Favorite } from '@mui/icons-material';

function Interest() {
  const interests = [
    { name: 'Gaming', image: './gaming.jpg' },
    { name: 'Board Games', image: './boardgames.jpg' },
    { name: 'Music', image: './music.jpg' }
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

      {/* HEADER LIKE THE ABOUT CARD */}
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
          <Favorite sx={{ fontSize: 32 }} />
        </Avatar>

        <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>
          Interests
        </Typography>
      </Box>

      {/* CONTENT */}
      <CardContent sx={{ p: 4 }}>

        <Box
          sx={{
            display: 'flex',
            gap: 2,
            justifyContent: 'center',
            flexWrap: 'wrap',
            width: '100%'
          }}
        >
          {interests.map((interest, index) => (
            <Box
              key={index}
              className="flip-container"
              sx={{
                width: 300,
                height: 300,
                perspective: '1000px',
                '&:hover .flip-card': {
                  transform: 'rotateY(180deg)'
                }
              }}
            >
              <Box
                className="flip-card"
                sx={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.7s',
                  borderRadius: '12px'
                }}
              >

                {/* FRONT */}
                <Box
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    backfaceVisibility: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: '#153548',
                    color: 'white',
                    borderRadius: '12px',
                    fontSize: '2rem',
                    fontWeight: 'bold'
                  }}
                >
                  {interest.name}
                </Box>

                {/* BACK */}
                <Box
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '12px',
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    backgroundImage: `url(${interest.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>

      </CardContent>
    </Card>
  );
}

export default Interest;
