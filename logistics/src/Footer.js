import React, { useState } from "react";
import { Box, Grid, Link, Typography } from "@mui/material";

const Footer = () => {
  // State to manage hover effect
  const [hoveredLink, setHoveredLink] = useState(null);

  // Function to handle link hover
  const handleMouseEnter = (index) => setHoveredLink(index);
  const handleMouseLeave = () => setHoveredLink(null);

  return (
    <Box
      id="footer"
      sx={{
        backgroundColor: "#292929",
        color: "white",
        py: 4,
        fontFamily: '"Roboto", sans-serif',
        textAlign: "center",
        mt: 4,
      }}
    >
      <Box sx={{ maxWidth: "1200px", mx: "auto", mb: 4 }}>
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: "#a74a88", fontWeight: 700, mb: 2 }}>
              Umris Enterprise
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
              Your ultimate partner in seamless transportation solutions, delivering reliability, efficiency, and excellence every mile of the way. Experience a journey where your needs are prioritized, your goals are achieved, and every delivery is a step toward success.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: "#a74a88", fontWeight: 700, mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ listStyle: "none", p: 0 }}>
              {["Home", "About", "Services", "Testimonials", "Contact"].map((linkText, index) => (
                <Typography
                  key={index}
                  variant="body2"
                  component="li"
                  sx={{
                    mb: 1,
                    transition: "color 0.3s",
                    color: hoveredLink === index ? "#ff6347" : "white",
                    fontWeight: hoveredLink === index ? "bold" : "normal",
                    "&:hover": {
                      color: "#ff6347",
                      fontWeight: "bold",
                    },
                  }}
                >
                  <Link
                    href={`#${linkText.replace(" ", "").toLowerCase()}`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    sx={{ textDecoration: "none", color: "inherit" }}
                  >
                    {linkText}
                  </Link>
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: "#a74a88", fontWeight: 700, mb: 2 }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
              Lorien Building | P.O Box 2240-20300 Nyahururu
              <br />
              Tel:{" "}
              <Link href="tel:+254721885902" sx={{ color: "white" }}>
                +254721885902
              </Link>{" "}
              /{" "}
              <Link href="tel:+254764268280" sx={{ color: "white" }}>
                +254764268280
              </Link>
              <br />
              Email:{" "}
              <Link href="mailto:umris.enterprises@gmail.com" sx={{ color: "white" }}>
                umris.enterprises@gmail.com
              </Link>
            </Typography>
          </Grid>

          {/* Quote of the Day */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ color: "#a74a88", fontWeight: 700, mb: 2 }}>
              Quote of the Day
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
              "Logistics is the backbone of progress, transforming ideas into action and dreams into reality. It bridges distances, connects people, and ensures that the world moves forward with precision, efficiency, and purpose, delivering success one mile at a time."
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Copyright */}
      <Box sx={{ bgcolor: "#292728", py: 2 }}>
        <Typography variant="body2" sx={{ color: "white" }}>
          &copy; 2024 Umris Enterprise. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
