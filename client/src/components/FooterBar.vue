<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="footer">
    <div class="wrapper">
      <div class="section">
        <div class="brand">
          <img style="width: 32px;" src="/icon.png" />
          <div class="name">Triple Tee App</div>
        </div>

        <div class="paragraph">
          Made with <i class="fa-solid fa-heart"></i> in Singapore.
        </div>
      </div>

      <div class="section links">
        <div class="column links">
          <div class="title">Project</div>

          <ul class="list">
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Source Code</a></li>
          </ul>
        </div>

        <div class="column links">
          <div class="title">How-Tos</div>

          <ul class="list">
            <li><a href="#">Customise Template</a></li>
            <li><a href="#">Cloud Sync</a></li>
          </ul>
        </div>

        <div class="column links">
          <div class="title">Support</div>

          <ul class="list">
            <li><a href="#">Bug Report</a></li>
            <li><a href="#">Feature Request</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div >
</template>

<style scoped>
.footer {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  min-height: 20rem;
  padding: 2rem;
  background-color: var(--color-background-mute);
}

.wrapper {
  margin: 0 auto;
  padding: 2rem 1rem;
  width: 80vw;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
}

.brand {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.brand .name {
  font-weight: 600;
}

.section.links {
  flex-direction: row;
  gap: 4rem;
}

.column.links .title {
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.links .list {
  list-style-type: none;
  padding-inline-start: 0;
}

@media (max-width: 960px) {
  .wrapper {
    max-width: 90vw !important;
    flex-direction: column !important;
    gap: 4rem;
  }

  .section {
    width: 100% !important;
  }

  .section.links {
    flex-direction: column !important;
    gap: 2rem;
  }
}

@media (min-width: 1920px) {
  .wrapper {
    max-width: 60vw !important;
  }
}
</style>
