import React from 'react';

const testimonialsData = [
  {
    id: 1,
    name: 'Malteser International',
    image: '/Malteser International.png',
    feedback: 'Umris Enterprises provided exceptional service! Our shipment was on time, and their staff was extremely helpful. I highly recommend them!',
  },
  {
    id: 2,
    name: 'Medisel (K) LTD',
    image: '/medi.png',
    feedback: 'Professional and reliable! Umris Enterprises exceeded our expectations with their quick delivery and attention to detail. Truly outstanding!',
  },
  {
    id: 3,
    name: 'MEDS',
    image: '/meds.png',
    feedback: 'We are amazed by the level of service. Umris Enterprises is efficient, friendly, and delivers beyond expectations!',
  },
  {
    id: 4,
    name: 'Machole Contractors',
    image: '/contractors.jpg',
    feedback: 'We had a great experience with Umris Enterprises. They handled our delivery efficiently, and the customer support team was very responsive. Highly satisfied with their service!',
  }
  
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <div id="testimonials" style={styles.container}>
      <h2 style={styles.heading}>What Our Customers Say</h2>
      <div style={styles.gridContainer}>
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} style={styles.card}>
            <img src={testimonial.image} alt={testimonial.name} style={styles.image} />
            <h3 style={styles.name}>{testimonial.name}</h3>
            <p style={styles.feedback}>{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '3rem 1.5rem',
    backgroundColor: '#292929', // Dark background for the section
    textAlign: 'center',
    color: '#ffffff',  // White text
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#a74a88', // Primary color for heading
    marginBottom: '2rem',
    fontFamily: '"Roboto", sans-serif',
    textTransform: 'uppercase',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1.5rem',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#292728', // Darker gray for cards
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s',
  },
  image: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '1rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  name: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#a74a88', // Primary color for name
    marginBottom: '0.5rem',
  },
  feedback: {
    fontSize: '1rem',
    color: '#ffffff',  // White text for feedback
    fontStyle: 'italic',
    margin: '0.5rem 0 0',
  },
};

export default Testimonials;
