// src/components/OverlayImage.js
import React from 'react';

const OverlayImage = () => {
  return (
    <div style={styles.overlayContainer}>
      <img src="/truck3.jpg" alt="Logistics" style={styles.image} />
      <div style={styles.overlay}>
{/*<h1 style={styles.title}>Welcome to Umris Enterprises</h1>*/}
        <p style={styles.subtitle}>
          <span style={styles.emphasis}>Umris Enterprises: </span>
          <span style={styles.standout}>Eyes on Perfection.</span>
        </p>
      </div>
    </div>
  );
};

const styles = {
  overlayContainer: {
    position: 'relative',
    textAlign: 'right',  // Align content to the right
    color: '#ffffff',    // Light text color
    overflow: 'hidden',  // Ensure the image doesn't overflow the container
  },
  image: {
    width: '100%',
    height: '500px',
    objectFit: 'cover',  // Ensure image fits within the container without distortion
    filter: 'brightness(70%)',  // Slightly dim the image for better text contrast
  },
  overlay: {
    position: 'absolute',
    top: '50%',
    right: '0',
    transform: 'translateY(-50%)',  // Center vertically and align to the right
    backgroundColor: 'rgba(41, 41, 41, 0.7)',  // Slightly darker overlay for better readability
    padding: '2rem 3rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',  // Add depth with a soft shadow
    width: '50%',  // Set a fixed width to avoid excessive space on large screens
  },
  title: {
    fontSize: '3.5rem',  // Large title size
    fontWeight: '700',
    marginBottom: '1rem',
    fontFamily: '"Roboto", sans-serif',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: '#a74a88',  // Use primary color for title
    textShadow: '3px 3px 5px rgba(0, 0, 0, 0.6)',  // Stronger shadow for better contrast
    lineHeight: '1.2',
  },
  subtitle: {
    fontSize: '1.6rem',
    fontWeight: '400',
    fontFamily: '"Arial", sans-serif',
    letterSpacing: '1px',
    marginTop: '0',
    color: '#ffffff',  // White color for readability
    textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)',  // Light shadow for contrast
    fontStyle: 'italic',
    lineHeight: '1.5',
  },
  emphasis: {
    fontWeight: '700',  // Use bold weight for emphasis
    fontSize: '1.9rem',  // Size similar to the title for consistency
    color: '#ffffff',  // White color for emphasis
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontStyle: 'italic',  // Italic style to match subtitle
  },
  standout: {
    fontWeight: '800',  // Bolder weight to make it stand out more
    fontSize: '2.5rem',  // Larger font size for greater emphasis
    color: '#a74a88',  // Primary color for attention
    textTransform: 'uppercase',
    letterSpacing: '2px',  // Add more spacing between letters
    fontStyle: 'italic',  // Keep italic style for consistency
    textShadow: '4px 4px 8px rgba(0, 0, 0, 0.7)',  // Strong shadow for contrast and emphasis
  },
};

export default OverlayImage;
