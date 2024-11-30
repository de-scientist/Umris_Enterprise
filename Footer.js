import React, { useState } from 'react';

const Footer = () => {
  // State to manage hover effect
  const [hoveredLink, setHoveredLink] = useState(null);

  // Function to handle link hover
  const handleMouseEnter = (index) => setHoveredLink(index);
  const handleMouseLeave = () => setHoveredLink(null);

  return (
    <footer id="footer" style={styles.footer}>
      <div style={styles.footerContent}>
        {/* Company Info */}
        <div style={styles.companyInfo}>
          <h3 style={styles.heading}>Umris Enterprise</h3>
          <p style={styles.paragraph}>
            Your trusted partner in transportation solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div style={styles.quickLinks}>
          <h3 style={styles.heading}>Quick Links</h3>
          <ul style={styles.list}>
            {['About Us', 'Our Services', 'Contact', 'Testimonials'].map((linkText, index) => (
              <li key={index} style={styles.listItem}>
                <a
                  href={`#${linkText.replace(' ', '').toLowerCase()}`}
                  style={{
                    ...styles.link,
                    ...(hoveredLink === index ? styles.linkHover : {}),
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {linkText}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div style={styles.contact}>
          <h3 style={styles.heading}>Contact Us</h3>
          <p style={styles.paragraph}>
            Lorien Building | P.O Box 2240-20300 Nyahururu |
            <br />
            Tel: <a href="tel:+254721885902" style={styles.link}>+254721885902</a> /
            <a href="tel:+254764268280" style={styles.link}>+254764268280</a>
            <br />
            Email: <a href="mailto:umris.enterprises@gmail.com" style={styles.link}>umris.enterprises@gmail.com</a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div style={styles.copyRight}>
        <p style={styles.paragraph}>&copy; 2024 Umris Enterprise. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#292929', // Dark footer background color
    color: '#ffffff', // Light text for contrast
    padding: '3rem 1rem',
    fontFamily: '"Roboto", sans-serif',
    textAlign: 'center',
    marginTop: '4rem',
  },
  footerContent: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', // Responsive grid layout
    gap: '2rem',
    marginBottom: '2rem',
  },
  companyInfo: {
    textAlign: 'left',
  },
  quickLinks: {
    textAlign: 'left',
  },
  contact: {
    textAlign: 'left',
  },
  heading: {
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '1rem',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    color: '#a74a88', // Heading color
  },
  paragraph: {
    fontSize: '1rem',
    margin: '0.5rem 0',
    lineHeight: '1.6',
    color: '#ffffff', // Paragraph text color
  },
  list: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  listItem: {
    marginBottom: '1rem',
  },
  link: {
    color: '#ffffff', // Updated link color to white
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s', // Smooth color transition
  },
  linkHover: {
    color: '#ff6347', // Hover color for the links
    fontWeight: 'bold', // Make the text bold on hover
  },
  copyRight: {
    backgroundColor: '#292728', // Slightly darker footer section
    padding: '1rem 0',
    fontSize: '0.9rem',
    color: '#ffffff', // Text color for copyright
  },
};

export default Footer;
