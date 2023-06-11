<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
import FooterBar from '@/components/FooterBar.vue';
</script>

<template>
  <header>
    <NavBar />
  </header>

  <div class="content-container">
    <RouterView />
  </div>

  <footer>
    <FooterBar />
  </footer>
</template>

<style scoped>
header {
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>
