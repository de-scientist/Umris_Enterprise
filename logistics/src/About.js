import React from 'react';

const aboutData = [
  { title: "Our Mission", img: "/mission.jpg", description: "We are committed to delivering reliable logistics and transportation solutions with integrity, excellence, and dedication, helping partners achieve their goals and succeed in every journey." },
  { title: "Our Vision", img: "/vision.jpg", description: "Our vision is to build long-term partnerships, supporting developmental and disaster response initiatives to create resilient communities through essential products and services for NGOs and agencies." },
  { title: "Our Values", img: "/values.jpg", description: "We uphold respect, fairness, and transparency as core values, ensuring ethical conduct, fostering trust, and providing an exceptional experience for customers while strengthening partnerships." },
];

const About = () => (
  <section id="about" style={styles.section}>
    <h2 style={styles.heading}>About Us</h2>
    <p style={styles.description}>
       Since 2017, Umris Enterprise has been providing exceptional transportation services, building partnerships on trust and delivering excellence through integrity, efficiency, and seamless, timely transportation.
    </p>
    <div style={styles.grid}>
      {aboutData.map((about, index) => (
        <div key={index} style={styles.card}>
          <img src={about.img} alt={about.title} style={styles.image} />
          <h3 style={styles.cardTitle}>{about.title}</h3>
          <p style={styles.cardDescription}>{about.description}</p>
        </div>
      ))}
    </div>
  </section>
);

const styles = {
  section: {
    padding: '3rem',
    textAlign: 'center',
    backgroundColor: '#292929', 
  },
  heading: {
    fontSize: '2.5rem',
    color: '#a74a88',  // Primary color for heading
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.2rem',
    color: '#ffffff',  // Light text for contrast
    marginBottom: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
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
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  cardTitle: {
    marginTop: '1rem',
    fontSize: '1.5rem',
    color: '#a74a88',  // Primary color for card titles
  },
  cardDescription: {
    fontSize: '1rem',
    color: '#ffffff',  // White text for readability
  },
};

export default About;
