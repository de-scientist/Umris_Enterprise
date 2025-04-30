import React from "react";
import { Box, Container, Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const aboutData = [
  { title: "Our Mission", img: "/mission.jpg", description: "We are committed to delivering reliable logistics and transportation solutions with integrity, excellence, and dedication, helping partners achieve their goals and succeed in every journey." },
  { title: "Our Vision", img: "/vision.jpg", description: "Our vision is to build long-term partnerships, supporting developmental and disaster response initiatives to create resilient communities through essential products and services for NGOs and agencies." },
  { title: "Our Values", img: "/values.jpg", description: "We uphold respect, fairness, and transparency as core values, ensuring ethical conduct, fostering trust, and providing an exceptional experience for customers while strengthening partnerships." },
];

const About = () => (
  <Box
    component="section"
    id="about"
    sx={{
      py: 8,
      bgcolor: "#292929",
    }}
  >
    <Container maxWidth="lg">
      <Typography
        component="h2"
        variant="h2"
        align="center"
        sx={{
          mb: 2,
          color: "primary.main",
          fontWeight: 700,
          fontSize: { xs: "2rem", md: "2.5rem" },
        }}
      >
        About Us
      </Typography>
      <Typography
        variant="h6"
        align="center"
        sx={{ mb: 6, maxWidth: 800, mx: "auto", color: "#ffffff" }}
      >
        Since 2017, Umris Enterprise has been providing exceptional transportation services,
        building partnerships on trust and delivering excellence through integrity,
        efficiency, and seamless, timely transportation.
      </Typography>
      <Grid container spacing={4}>
        {aboutData.map((about, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "#292728",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 8,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={about.img}
                  alt={about.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    sx={{
                      color: "primary.main",
                      fontWeight: 600,
                      textTransform: "uppercase",
                    }}
                  >
                    {about.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#ffffff" }}>
                    {about.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default About;
  section: {
    padding: '3rem',
    textAlign: 'center',
    backgroundColor: '#292929', 
  },
  heading: {
    fontSize: '2.5rem',
    color: '#a74a88',  // Primary color for heading
    marginBottom: '1rem',
    fontWeight: '700',
    letterSpacing: '1px',
  },
  description: {
    fontSize: '1.2rem',
    color: '#ffffff',  // Light text for contrast
    marginBottom: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  grid: {
    display: 'grid',
    gap: '2rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    padding: '1rem',
    backgroundColor: '#292728',  // Slightly different shade for cards
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease', // Smooth hover effect
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    objectFit: 'cover',  // Ensures image fills card container without distortion
  },
  cardTitle: {
    marginTop: '1rem',
    fontSize: '1.5rem',
    color: '#a74a88',  // Primary color for card titles
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  cardDescription: {
    fontSize: '1rem',
    color: '#ffffff',  // White text for readability
    marginTop: '0.5rem',
  },
  // Hover effect for cards
  cardHover: {
    transform: 'scale(1.05)', // Slight zoom on hover
  },
};

export default About;
