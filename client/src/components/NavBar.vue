<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="nav">
    <RouterLink class="nav-item brand" to="/">
      <img style="width: 32px;" src="/icon.png" />
      Triple Tee App
    </RouterLink>
    <RouterLink class="nav-item" to="/demo">Demo</RouterLink>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 0.5rem 2rem;
  background-color: var(--color-background-mute);
}

.nav-item {
  display: inline-block;
  padding: 0.5rem 1rem;
}

.nav-item.brand:hover {
  border: none;
}

.nav-item.brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 900;
}

.nav a.router-link-exact-active {
  color: var(--color-text);
}

@media (max-width: 960px) {
  .nav {
    padding: 0.5rem 1rem !important;
  }
}
</style>
