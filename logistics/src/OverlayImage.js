import React, { useEffect, useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const OverlayImage = () => {
  const galleryImages = [
    '/truck1.jpg',
    '/truck2.jpg',
    '/truck3.jpg',
    '/truck4.jpg',
    '/truck5.jpg',
    '/1.png',
    '/2.png',
    '/3.png',
    '/4.png',
    '/5.png',
    '/6.png',
    '/7.png',
    '/9.png',
    '/10.png',
    '/11.png',
    '/12.png',
    '/13.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [galleryImages.length]);

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: { xs: "400px", md: "600px" },
        bgcolor: "#000",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={galleryImages[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(50%)",
          }}
        />
      </AnimatePresence>
      <Container
        maxWidth="lg"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#fff",
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              mb: 2,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            Umris Enterprises
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              fontWeight: 500,
              color: "primary.main",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            Eyes on Perfection
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default OverlayImage;
  overlayContainer: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '500px', // Fixed height for consistent display
    boxSizing: 'border-box', // Ensure padding doesn't cause overflow
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Prevent image distortion
    filter: 'brightness(70%)',
    transition: 'opacity 1s ease-in-out', // Smooth fade transition
  },
  textOverlay: {
    position: 'absolute',
    top: '50%',
    right: '10%', // Adjusted for right alignment
    transform: 'translateY(-50%)',
    textAlign: 'right',
    color: '#ffffff',
    textShadow: '4px 4px 8px rgba(0, 0, 0, 0.4)', // Increased box-shadow opacity for better visibility
    zIndex: 1, // Ensure text appears above image
  },
  subtitle: {
    fontSize: '2.4rem', // Increased font size for readability
    fontWeight: '400',
    fontFamily: '"Merriweather", serif', // Professional and appealing font
    letterSpacing: '1.5px',
    marginTop: '0',
    color: '#ffffff',
    fontStyle: 'italic',
    lineHeight: '1.7',
  },
  emphasis: {
    fontWeight: '700',
    fontSize: '2.7rem', // Increased font size for emphasis
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    fontStyle: 'italic',
  },
  standout: {
    fontWeight: '800',
    fontSize: '3.2rem', // Increased font size for standout effect
    color: '#a74a88',
    textTransform: 'uppercase',
    letterSpacing: '2.5px',
    fontStyle: 'italic',
    textShadow: '4px 4px 8px rgba(0, 0, 0, 0.6)', // Enhanced shadow for standout effect
  },
};

export default OverlayImage;
