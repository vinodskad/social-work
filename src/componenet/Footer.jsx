import React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#222",
        color: "#fff",
        py: 3,
        mt: 4,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Left Side */}
        <Typography variant="body2">
          © {new Date().getFullYear()} My Website. All rights reserved.
        </Typography>

        {/* Right Side - Social Icons */}
        <Box>
          <IconButton
            component="a"
            href="https://facebook.com"
            target="_blank"
            rel="noopener"
            sx={{ color: "#fff" }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            component="a"
            href="https://twitter.com"
            target="_blank"
            rel="noopener"
            sx={{ color: "#fff" }}
          >
            <Twitter />
          </IconButton>
          <IconButton
            component="a"
            href="https://instagram.com"
            target="_blank"
            rel="noopener"
            sx={{ color: "#fff" }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            component="a"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener"
            sx={{ color: "#fff" }}
          >
            <LinkedIn />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
