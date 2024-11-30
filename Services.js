import React from 'react';

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
  <section id="services" style={styles.section}>
    <h2 style={styles.heading}>Our Services</h2>
    <p style={styles.description}>
      Need efficient and secure logistics? Umris Enterprise offers comprehensive services, from trucking to last-mile delivery, with route optimization, real-time order processing, and secure packaging for timely and reliable results.
    </p>
    <div style={styles.grid}>
      {servicesData.map((service, index) => (
        <div key={index} style={styles.card}>
          <img src={service.img} alt={service.title} style={styles.image} />
          <h3 style={styles.cardTitle}>{service.title}</h3>
          <p style={styles.cardDescription}>{service.description}</p>
        </div>
      ))}
    </div>
  </section>
);

const styles = {
  section: {
    padding: '3rem',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.45)',  // Light gray background with 45% opacity
  },
  heading: {
    fontSize: '2.5rem',
    color: '#a74a88',  // Primary color for heading
    marginBottom: '1rem',
  },
  description: {
    fontSize: '1.2rem',
    color: '#555',  // Dark gray for description text
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
    backgroundColor: '#292728',  // Dark gray for cards
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
    color: '#ffffff',  // White text for readability in cards
  },
};

export default Services;
