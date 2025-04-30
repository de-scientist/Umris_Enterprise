<script setup lang="ts">
const aboutData = [
  { title: "Our Mission", img: "/mission.jpg", description: "We are committed to delivering reliable logistics and transportation solutions with integrity, excellence, and dedication, helping partners achieve their goals and succeed in every journey." },
  { title: "Our Vision", img: "/vision.jpg", description: "Our vision is to build long-term partnerships, supporting developmental and disaster response initiatives to create resilient communities through essential products and services for NGOs and agencies." },
  { title: "Our Values", img: "/values.jpg", description: "We uphold respect, fairness, and transparency as core values, ensuring ethical conduct, fostering trust, and providing an exceptional experience for customers while strengthening partnerships." },
];
</script>

<template>
  <section id="about" class="about-section">
    <div class="container">
      <h2 class="section-title">About Us</h2>
      <p class="section-description">
        Since 2017, Umris Enterprise has been providing exceptional transportation services,
        building partnerships on trust and delivering excellence through integrity,
        efficiency, and seamless, timely transportation.
      </p>
      <div class="about-grid">
        <div
          v-for="(item, index) in aboutData"
          :key="index"
          class="about-card"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="card-inner">
            <img :src="item.img" :alt="item.title" class="about-image" />
            <div class="card-content">
              <h3 class="item-title">{{ item.title }}</h3>
              <p class="item-description">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 4rem 0;
  background-color: #292929;
  color: #ffffff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
  text-align: center;
  color: #1976d2;
  font-weight: 700;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.section-description {
  text-align: center;
  color: #ffffff;
  max-width: 800px;
  margin: 0 auto 3rem;
  font-size: 1.125rem;
  line-height: 1.6;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.about-card {
  opacity: 0;
  animation: fadeInUp 0.5s ease forwards;
}

.card-inner {
  background-color: #292728;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-inner:hover {
  transform: translateY(-8px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}

.about-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 1.5rem;
}

.item-title {
  color: #1976d2;
  font-weight: 600;
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
}

.item-description {
  color: #ffffff;
  line-height: 1.5;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .about-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}
</style>