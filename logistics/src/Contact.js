import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div id="contact" style={styles.container}>
      <div style={styles.contentContainer}>
        
        {/* Left Image Overlay */}
        <div style={styles.overlay}>
          <img src="person-making-phone-call.jpg" alt="Contact Us Background" style={styles.backgroundImage} />
        </div>

        {/* Right Text Container */}
        <div style={styles.textContainer}>
           {/* New paragraph added here */}
           <p style={{ ...styles.paragraph, marginBottom: '2rem' }}>
            Have questions or need assistance? Reach out to Umris Enterprise! Our dedicated team is ready to provide prompt, helpful support and ensure all your logistics needs are met with care and professionalism.
          </p>

          <h2 style={styles.heading}>Contact Us</h2>
          <p style={styles.paragraph}>
            Lorien Building | P.O Box 2240-20300 Nyahururu |
            <br />
            Tel: <a href="tel:+254721885902" style={styles.link}>+254721885902</a> /
            <a href="tel:+254764268280" style={styles.link}>+254764268280</a>
            <br />
            Email: <a href="mailto:umris.enterprises@gmail.com" style={styles.link}>umris.enterprises@gmail.com</a>
          </p>

          <div style={styles.buttonsContainer}>
            <button onClick={() => window.location.href = 'tel:+254721885902'} style={styles.button}>Call Us</button>
            <button onClick={() => window.location.href = 'mailto:umris.enterprises@gmail.com'} style={styles.button}>Email Us</button>
          </div>
          <div style={styles.socialMediaContainer}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <FaFacebook /> Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <FaTwitter /> Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div style={styles.mapContainer}>
        <iframe
          title="Map of Kenya"
          style={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1191663.8369534934!2d37.906193!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d92e0a8a4f%3A0xe5b095752366ba39!2sKenya!5e0!3m2!1sen!2ske!4v1600000000000"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '2rem',
    color: '#ffffff',
  },
  contentContainer: {
    display: 'flex',
    width: '100%',
    maxWidth: '1200px',
    flexWrap: 'wrap',
  },
  overlay: {
    width: '50%',
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(0.7)',  // Adjusted filter to lighten the image for better visibility of the text
  },
  textContainer: {
    width: '50%',
    padding: '2rem',
    backgroundColor: '#292728', // Darker background for better contrast
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#a74a88', // Color for headings
    marginBottom: '1rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  paragraph: {
    fontSize: '1.1rem',
    color: '#ffffff', // White text for paragraphs
    marginBottom: '1.5rem',
  },
  link: {
    color: '#ffffff', // White color for links
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '2rem',
  },
  button: {
    padding: '0.8rem 1.5rem',
    fontSize: '1.1rem',
    color: '#ffffff', // Text color for button
    background: '#a74a88', // Button background
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
  socialMediaContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1.5rem',
    gap: '1rem',
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.2rem',
    color: '#ffffff', // White color for social links
    textDecoration: 'none',
    gap: '0.5rem',
    fontWeight: '500',
    transition: 'color 0.3s',
  },
  mapContainer: {
    width: '100%',
    maxWidth: '1000px',
    marginTop: '2rem',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  map: {
    width: '100%',
    height: '400px',
    border: '0',
  },
};

export default ContactUs;
