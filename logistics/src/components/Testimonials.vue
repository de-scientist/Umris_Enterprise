<script setup lang="ts">
import { ref } from 'vue';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO, Tech Solutions Ltd',
    image: '/joseph.png',
    quote: 'Umri\'s Enterprises has transformed our logistics operations. Their efficiency and reliability are unmatched in the industry.'
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Operations Manager, Global Trade Co',
    image: '/milkah.png',
    quote: 'Working with Umri\'s has been a game-changer for our business. Their attention to detail and professional service is exceptional.'
  },
  {
    id: 3,
    name: 'Michael Brown',
    role: 'Supply Chain Director, Retail Corp',
    image: '/medi.png',
    quote: 'The team at Umri\'s Enterprises consistently delivers beyond expectations. They\'re truly partners in our success.'
  }
];

const currentIndex = ref(0);

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length;
};

const prevTestimonial = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length;
};
</script>

<template>
  <section id="testimonials" class="testimonials-section">
    <div class="container">
      <h2 class="section-title">What Our Clients Say</h2>
      <p class="section-description">
        Don't just take our word for it - hear from some of our satisfied clients
      </p>

      <div class="testimonials-carousel">
        <button class="carousel-button prev" @click="prevTestimonial">
          <i class="fas fa-chevron-left"></i>
        </button>

        <div class="testimonial-card">
          <div class="testimonial-image">
            <img :src="testimonials[currentIndex].image" :alt="testimonials[currentIndex].name" />
          </div>
          <div class="testimonial-content">
            <p class="quote">"{{ testimonials[currentIndex].quote }}"</p>
            <div class="author-info">
              <h3>{{ testimonials[currentIndex].name }}</h3>
              <p>{{ testimonials[currentIndex].role }}</p>
            </div>
          </div>
        </div>

        <button class="carousel-button next" @click="nextTestimonial">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>

      <div class="carousel-indicators">
        <button
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.id"
          class="indicator"
          :class="{ active: index === currentIndex }"
          @click="currentIndex = index"
        ></button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials-section {
  padding: 5rem 0;
  background-color: #f8f9fa;
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

.testimonials-carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.carousel-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--primary-color);
  cursor: pointer;
  padding: 1rem;
  transition: color 0.3s ease;
}

.carousel-button:hover {
  color: #1565c0;
}

.testimonial-card {
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  display: flex;
  gap: 2rem;
  align-items: center;
}

.testimonial-image {
  flex-shrink: 0;
}

.testimonial-image img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--primary-color);
}

.testimonial-content {
  flex-grow: 1;
}

.quote {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  font-style: italic;
}

.author-info h3 {
  font-size: 1.2rem;
  color: var(--text-primary);
  margin-bottom: 0.25rem;
}

.author-info p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ddd;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.indicator.active {
  background-color: var(--primary-color);
}

@media (max-width: 768px) {
  .testimonial-card {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .testimonial-image img {
    width: 100px;
    height: 100px;
  }

  .quote {
    font-size: 1rem;
  }
}
</style>