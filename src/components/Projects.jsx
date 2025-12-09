import React from 'react';
import { Box, Typography, Card, CardContent, Avatar } from '@mui/material';
import { Folder } from '@mui/icons-material';

function Projects() {
  const projects = [
    {
      title: "CARWASA",
      image: "carwasa.jpg",
      description:
        "CARWASA is a water-billing web application designed for the Casay community. It allows residents to easily check billing statements, track water consumption, receive updates, and pay online—removing the need for long queues and manual processing. It improves convenience, accessibility, and efficiency for households.",
    },
    {
      title: "Waste Uh-Uh!",
      image: "wasteuhuh.jpg",
      description:
        "Waste Uh-Uh! is a desktop application that helps users monitor their waste generation and food intake. It encourages sustainable habits, reduces unnecessary waste, and promotes mindful consumption. Built to support environmental awareness and personal responsibility.",
    },
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
      {/* Header */}
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
          <Folder sx={{ fontSize: 32 }} />
        </Avatar>
        <Typography variant="h4" sx={{ color: 'white', fontWeight: 700 }}>
          Featured Projects
        </Typography>
      </Box>

      <CardContent sx={{ p: 4 }}>
        <Box
          sx={{
            display: "flex",
            gap: 3,
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {projects.map((project, index) => (
            <Box
              key={index}
              sx={{
                width: "48%",
                height: 420,
                perspective: "1000px",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  position: "relative",
                  transformStyle: "preserve-3d",
                  transition: "transform 0.7s",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "rotateY(180deg)",
                  },
                }}
              >
                {/* FRONT - Image */}
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "2px solid #153548"
                  }}
                >
                  <Box
                    component="img"
                    src={project.image}
                    alt={project.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                {/* BACK - Description */}
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    borderRadius: "12px",
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    bgcolor: "#153548",
                    color: "white",
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    border: "2px solid #153548"
                  }}
                >
                  <Typography variant="h4" sx={{ mb: 2, fontWeight: 700 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                    {project.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}

export default Projects;
