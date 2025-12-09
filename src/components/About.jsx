import React from 'react';
import { Card, CardContent, Typography, Box, Chip, Avatar } from '@mui/material';
import { Email, GitHub, LinkedIn, Person } from '@mui/icons-material';

function About() {
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
          <Person sx={{ fontSize: 32 }} />
        </Avatar>
        <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>
          About Me
        </Typography>
      </Box>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'text.secondary' }}>
          I’ve spent most of my life feeling like a quiet shadow in the background—scrolling through a world where everyone seems chosen, held, and loved in ways I’ve never known. I grew up without the childhood snapshots that prove someone cared enough to remember me; no playful photos, no captured moments—just the stiff, formal ones taken only when I achieved something. It often made me feel like I only mattered when I earned it.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'text.secondary' }}>
          Maybe that’s why I’ve always believed love was something already taken before I arrived. I was the unplanned child, the almost-erased story, the one who grew up learning that affection was a language never taught to me.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'text.secondary' }}>
          But as I moved through life, something unexpected happened. Even though I’ve never truly felt chosen, I somehow became the person others turned to. I became the person who listens, who comforts, who helps people stand again. The “person of convenience,” I used to call it—someone people lean on when they’re hurting, then forget once they’re healed.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'text.secondary' }}>
          Still, I’ve come to understand something about myself:
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'text.secondary' }}>
          I’m not disposable.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'text.secondary' }}>
          I’m not temporary.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'text.secondary' }}>
          I’m someone who makes others better.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'text.secondary' }}>
          And maybe that’s its own form of purpose.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'text.secondary' }}>
          I’m learning to believe that one day, someone will see me for who I genuinely am—someone who feels deeply, who cares honestly, who gives quietly—and they’ll choose me with intention, not convenience.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'text.secondary' }}>
          Until then, I’m here.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'text.secondary' }}>
          Growing. Healing.
        </Typography>
        <Typography variant="body1" paragraph sx={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'text.secondary' }}>
          Becoming someone who knows they were always worth loving.
        </Typography>
        
        <Box sx={{ mt: 3, display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
          <Chip 
            icon={<Email />} 
            label="francisconicole068@email.com" 
            sx={{ 
              px: 1,
              py: 2.5,
              fontSize: '0.95rem',
              bgcolor: '#f0f0f0',
              '&:hover': {
                bgcolor: '#153548',
                color: 'white',
                '& .MuiChip-icon': {
                  color: 'white'
                }
              },
              transition: 'all 0.3s ease'
            }} 
          />
          <Chip 
            icon={<GitHub />} 
            label="github.com/Johnnnnn28" 
            sx={{ 
              px: 1,
              py: 2.5,
              fontSize: '0.95rem',
              bgcolor: '#f0f0f0',
              '&:hover': {
                bgcolor: '#153548',
                color: 'white',
                '& .MuiChip-icon': {
                  color: 'white'
                }
              },
              transition: 'all 0.3s ease'
            }} 
          />
          
        </Box>
      </CardContent>
    </Card>
  );
}

export default About;