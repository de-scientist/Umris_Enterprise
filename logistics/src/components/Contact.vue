<script setup lang="ts">
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  message: ''
});

const handleSubmit = () => {
  // Handle form submission logic here
  console.log('Form submitted:', formData.value);
};
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <h2 class="section-title">Contact Us</h2>
      <p class="section-description">
        Get in touch with us for any inquiries about our logistics services
      </p>
      
      <div class="contact-content">
        <div class="contact-info">
          <div class="info-item">
            <i class="fas fa-map-marker-alt"></i>
            <h3>Our Location</h3>
            <p>123 Logistics Way, Nairobi, Kenya</p>
          </div>
          <div class="info-item">
            <i class="fas fa-phone"></i>
            <h3>Phone Number</h3>
            <p>+254 123 456 789</p>
          </div>
          <div class="info-item">
            <i class="fas fa-envelope"></i>
            <h3>Email Address</h3>
            <p>info@umris.com</p>
          </div>
        </div>

        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <input
              type="text"
              v-model="formData.name"
              placeholder="Your Name"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              v-model="formData.email"
              placeholder="Your Email"
              required
            />
          </div>
          <div class="form-group">
            <textarea
              v-model="formData.message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" class="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 5rem 0;
  background-color: var(--background-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.section-description {
  text-align: center;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto 3rem;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-item {
  padding: 1.5rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.info-item:hover {
  transform: translateY(-5px);
}

.info-item i {
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.info-item h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.info-item p {
  color: var(--text-secondary);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

.submit-button {
  background-color: var(--primary-color);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #1565c0;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }

  .section-title {
    font-size: 2rem;
  }
}
</style>