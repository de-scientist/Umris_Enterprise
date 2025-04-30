<script setup lang="ts">
import { ref } from 'vue';

const hovered = ref<string | null>(null);
const navItems = ['home', 'about', 'services', 'testimonials', 'contact', 'footer'];

const setHovered = (item: string | null) => {
  hovered.value = item;
};
</script>

<template>
  <nav class="navbar">
    <div class="toolbar">
      <button
        v-for="(item, index) in navItems"
        :key="index"
        class="nav-button"
        :class="{ 'hovered': hovered === item }"
        @mouseenter="setHovered(item)"
        @mouseleave="setHovered(null)"
        @click="$emit('navigate', item)"
      >
        {{ item.charAt(0).toUpperCase() + item.slice(1) }}
      </button>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(33, 33, 33, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.toolbar {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem 0;
}

.nav-button {
  color: white;
  font-weight: 500;
  text-transform: capitalize;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
}

.nav-button:hover,
.nav-button.hovered {
  color: #1976d2;
}

.nav-button::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #1976d2;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease-in-out;
}

.nav-button:hover::after,
.nav-button.hovered::after {
  transform: scaleX(1);
}
</style>