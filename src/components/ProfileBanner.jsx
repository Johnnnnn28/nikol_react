import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

function ProfileBanner() {
  return (
    <Box
      sx={{
        width: "100%",

        // Full-width section that blends with your page
        py: 12,
        px: { xs: 2, sm: 4, md: 6 },

        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",

        // Space between image and text
        gap: { xs: 5, md: 8 },
      }}
    >
      {/* LEFT — LARGE PROFILE IMAGE */}
      <Avatar
        src="profile.jpg"
        alt="Profile Photo"
        sx={{
          width: { xs: 220, md: 280 },
          height: { xs: 220, md: 280 },
          border: "8px solid #9AE8B7",
          boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
        }}
      />

      {/* RIGHT — TEXT CONTENT */}
      <Box sx={{ flex: 1, maxWidth: "750px" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            color: "#9AE8B7",
            textShadow: "0 2px 6px rgba(0,0,0,0.4)",
            mb: 1,
          }}
        >
          John Nicoleden V. Francisco
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 400,
            mb: 3,
            color: "#DFF7EF",
            opacity: 0.95,
          }}
        >
          Bachelor of Science in Information Technology Student
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: "1.25rem",
            lineHeight: 1.8,
            color: "#EAF7F3",
            opacity: 0.95,
          }}
        >
          "You don't criticize the moon for not shining the same each night, you
          don't look up at it and say you're not trying hard enough, because the
          moon doesn't have to be full and bright every night to be loved, and
          neither do you."
        </Typography>
      </Box>
    </Box>
  );
}

export default ProfileBanner;
