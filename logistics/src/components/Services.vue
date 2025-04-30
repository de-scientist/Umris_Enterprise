<script setup lang="ts">
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
</script>

<template>
  <section id="services" class="services-section">
    <div class="container">
      <h2 class="section-title">Our Services</h2>
      <p class="section-description">
        Need efficient and secure logistics? Umris Enterprise offers comprehensive services,
        from trucking to last-mile delivery, with route optimization, real-time order
        processing, and secure packaging for timely and reliable results.
      </p>
      <div class="services-grid">
        <div
          v-for="(service, index) in servicesData"
          :key="index"
          class="service-card"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="card-inner">
            <img :src="service.img" :alt="service.title" class="service-image" />
            <div class="card-content">
              <h3 class="service-title">{{ service.title }}</h3>
              <p class="service-description">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  padding: 4rem 0;
  background-color: var(--background-color, #ffffff);
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
  color: var(--text-secondary, #666);
  max-width: 800px;
  margin: 0 auto 3rem;
  font-size: 1.125rem;
  line-height: 1.6;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.service-card {
  opacity: 0;
  animation: fadeInUp 0.5s ease forwards;
}

.card-inner {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-inner:hover {
  transform: translateY(-8px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.service-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 1.5rem;
}

.service-title {
  color: #1976d2;
  font-weight: 600;
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.service-description {
  color: var(--text-secondary, #666);
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
  
  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}
</style>