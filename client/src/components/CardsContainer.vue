<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  cards: {
    type: Array,
    default() {
      return [];
    },
  },
});

const cardStyle = computed(() => {
  return `width: ${ 100 / props.cards.length }%;`;
});
</script>

<template>
  <div class="cards">
    <div
      v-for="(card, i) in cards"
      :key="i"
      class="card"
      :style="cardStyle"
    >
      <div class="title">
        <i :class="card.icon"></i>
        {{ card.title }}
      </div>

      <div class="paragraph">
        {{ card.content }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.cards {
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  justify-content: stretch;
  width: 100%;
  padding: 4rem 1rem;
}

.cards .card {
  margin: 0 1rem;
  padding: 1rem 1rem 2rem 1rem;
  border-radius: 1rem;
  background-color: var(--color-border-hover);
}

.cards .card .paragraph {
  max-width: 100%;
}

.title {
  font-weight: 600;
  text-transform: uppercase;
  padding: 1rem 0;
}

.subtitle {
  font-size: 1.6rem;
  font-weight: 600;
}

@media (max-width: 960px) {
  .cards {
    flex-direction: column !important;
    gap: 1rem;
    padding: 2rem 0 !important;
  }

  .cards .card {
    width: 90% !important;
  }
}
</style>
