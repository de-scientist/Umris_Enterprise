import React from "react";
import { Box, Container, Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { motion } from "framer-motion";

const servicesData = [
  { title: "Trucking and Shipping", img: "/truck1.jpg", description: "We organize the transportation of goods by trucks." },
  { title: "Route Optimization", img: "/Route.jpg", description: "We plan efficient routes to reduce delivery time and costs." },
  { title: "Last-Mile Delivery", img: "/truck2.jpg", description: "We offer fast and reliable last-mile delivery solutions." },
  { title: "Order Processing", img: "/Order.jpg", description: "We manage customer orders for timely dispatch." },
  { title: "Packaging and Labeling", img: "/label.jpg", description: "We ensure secure packing and proper labeling for tracking." },
  { title: "Shipping and Delivery", img: "/shipping.jpg", description: "We dispatch goods with real-time updates." },
  { title: "Freight Forwarding", img: "/Freight.jpg", description: "We handle all aspects of freight forwarding, including customs clearance and transportation." },
  { title: "Cargo Handling", img: "/cargo.jpg", description: "We ensure the safe and efficient handling of cargo throughout the entire journey." }
];

const Services = () => (
  <Box
    component="section"
    id="services"
    sx={{
      py: 8,
      bgcolor: "background.default",
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
        Our Services
      </Typography>
      <Typography
        variant="h6"
        align="center"
        color="text.secondary"
        sx={{ mb: 6, maxWidth: 800, mx: "auto" }}
      >
        Need efficient and secure logistics? Umris Enterprise offers comprehensive services,
        from trucking to last-mile delivery, with route optimization, real-time order
        processing, and secure packaging for timely and reliable results.
      </Typography>
      <Grid container spacing={4}>
        {servicesData.map((service, index) => (
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
                  image={service.img}
                  alt={service.title}
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
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {service.description}
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

export default Services;
  section: {
    padding: '3rem',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.45)',  // Light gray background with 45% opacity
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
    color: '#555',  // Dark gray for description text
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
    backgroundColor: '#292728',  // Dark gray for cards
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease', // Adding hover effect transition
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    objectFit: 'cover',  // Ensure image covers the container without distortion
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
    color: '#ffffff',  // White text for readability in cards
    marginTop: '0.5rem',
  },
  // Hover effect for cards
  cardHover: {
    transform: 'scale(1.05)', // Slight zoom on hover
  },
};

export default Services;
