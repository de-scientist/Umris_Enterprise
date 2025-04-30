<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import OverlayImage from './components/OverlayImage.vue';
import About from './components/About.vue';
import Services from './components/Services.vue';
import Contact from './components/Contact.vue';
import Testimonials from './components/Testimonials.vue';
import Footer from './components/Footer.vue';

const handleNavigation = (section: string) => {
  const element = document.getElementById(section);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<template>
  <div class="app">
    <Navbar @navigate="handleNavigation" />
    <main class="main-content">
      <section id="home">
        <OverlayImage />
      </section>
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<style>
:root {
  --primary-color: #1976d2;
  --background-color: #ffffff;
  --text-primary: #333333;
  --text-secondary: #666666;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  color: var(--text-primary);
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  margin-top: 64px; /* Height of the navbar */
}

section {
  scroll-margin-top: 64px; /* Offset for fixed navbar */
}
</style>
