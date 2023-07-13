<script setup>
import { onMounted, ref, computed } from 'vue';
import Prism from 'prismjs';

const props = defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: 'none',
  },
});

const highlightDone = ref(false);

const languageClass = computed(() => {
  return `language-${props.language}`;
});

const codeCopied = ref(false);
const codeCopiedClass = computed(() => {
  if (codeCopied.value) {
    return 'alert show';
  } else {
    return 'alert';
  }
});

function toggleCodeCopied() {
  codeCopied.value = !codeCopied.value;
}

function copyCode() {
  navigator.clipboard.writeText(props.code);
  toggleCodeCopied();
  setTimeout(toggleCodeCopied, 3000);
}

onMounted(() => {
  Prism.highlightAll(false);
});
</script>

<template>
  <div class="code-container">
    <div
      class="clipboard"
      @click="copyCode"
    >
      <i class="fa-solid fa-xl fa-copy"></i>
    </div>

    <div :class="codeCopiedClass">
      Copied to clipboard!
    </div>

    <pre :class="languageClass">
      <code>
        {{ code }}
      </code>
    </pre>
  </div>
</template>

<style scoped>
.code-container .clipboard {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  padding: 1rem;
  color: #ccc !important;
}

.code-container .clipboard:hover {
  cursor: pointer;
  color: #999 !important;
}

.code-container .alert {
  display: none;
  position: absolute;
  top: 3rem;
  right: 1rem;
  z-index: 1;
  color: #ccc !important;
}

.code-container .alert.show {
  display: inline-block;
}
</style>
