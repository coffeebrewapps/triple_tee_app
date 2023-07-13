<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  tabs: {
    type: Array,
    default() {
      return [];
    },
  },
});

const selectedTab = ref(0);

function selectTab(i) {
  selectedTab.value = i;
}

function tabClass(i) {
  if (selectedTab.value === i) {
    return 'tab active';
  } else {
    return 'tab';
  }
}

function tabContentClass(i) {
  if (selectedTab.value === i) {
    return 'tab-content show';
  } else {
    return 'tab-content';
  }
}
</script>

<template>
  <div class="tab-container">
    <div class="tabs">
      <div
        v-for="(tab, i) in tabs"
        :key="i"
        :class="tabClass(i)"
        @click="selectTab(i)"
      >
        {{ tab.name }}
      </div>
    </div>

    <div class="tab-contents">
      <div
        v-for="(tabs, i) in tabs"
        :key="i"
        :class="tabContentClass(i)"
      >
        <slot :name="`tab-content.${i}`"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tab-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tab-container .tabs {
  display: flex;
}

.tab-container .tabs .tab {
  padding: 0.5rem 1rem;
}

.tab-container .tabs .tab:hover {
  cursor: pointer;
  border-bottom: 2px solid var(--color-border);
}

.tab-container .tabs .tab.active {
  font-weight: 600;
  border-bottom: 2px solid var(--color-border);
}

.tab-container .tab-contents .tab-content {
  display: none;
}

.tab-container .tab-contents .tab-content.show {
  display: block;
}
</style>
