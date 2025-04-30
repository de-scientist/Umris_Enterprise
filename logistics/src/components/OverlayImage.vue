<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const galleryImages = [
  '/truck1.jpg',
  '/truck2.jpg',
  '/truck3.jpg',
  '/truck4.jpg',
  '/truck5.jpg',
  '/1.png',
  '/2.png',
  '/3.png',
  '/4.png',
  '/5.png',
  '/6.png',
  '/7.png',
  '/9.png',
  '/10.png',
  '/11.png',
  '/12.png',
  '/13.png',
];

const currentIndex = ref(0);
let interval: number | undefined;

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % galleryImages.length;
  }, 3000);
});

onUnmounted(() => {
  if (interval) clearInterval(interval);
});
</script>

<template>
  <div class="overlay-container">
    <transition name="fade" mode="out-in">
      <img
        :key="currentIndex"
        :src="galleryImages[currentIndex]"
        :alt="`Slide ${currentIndex + 1}`"
        class="gallery-image"
      />
    </transition>
    <div class="content-container">
      <h1 class="title">Umris Enterprises</h1>
      <h2 class="subtitle">Your Trusted Logistics Partner</h2>
      <p class="description">
        Delivering excellence in transportation and logistics services across East Africa.
        We specialize in reliable, efficient, and secure delivery solutions for humanitarian aid,
        medical supplies, and commercial cargo.
      </p>
    </div>
  </div>
</template>

<style scoped>
.overlay-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 600px;
  background-color: #000;
}

@media (max-width: 768px) {
  .overlay-container {
    height: 400px;
  }
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(50%);
}

.content-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  z-index: 1;
  width: 80%;
  max-width: 1200px;
}

.title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.subtitle {
  font-size: 2.5rem;
  font-weight: 500;
  color: #1976d2;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
}

.description {
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .title {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1.5rem;
  }
  
  .description {
    font-size: 1rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>