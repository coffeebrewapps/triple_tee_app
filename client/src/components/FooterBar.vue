<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';

const supportDevImgSrc = computed(() => {
  const bgColorVar = supportDevBtnState.value ? '--vt-c-brown-bright-hover' : '--vt-c-brown-bright';
  const bgColor = getComputedStyle(document.documentElement).getPropertyValue(bgColorVar).split('#')[1];

  const txtColorVar = supportDevBtnState.value ? '--vt-c-brown-lighter' : '--vt-c-brown-dark';
  const txtColor = getComputedStyle(document.documentElement).getPropertyValue(txtColorVar).split('#')[1];

  const parts = [`https://img.buymeacoffee.com/button-api/?`];
  const query = {
    text: `Support Dev `,
    emoji: `❤️`,
    slug: `gohkhoonhiang`,
    button_colour: bgColor,
    font_colour: txtColor,
    font_family: `Inter`,
    outline_colour: txtColor,
    coffee_colour: txtColor,
  }

  const queryString = (new URLSearchParams(query)).toString();

  parts.push(queryString);

  return parts.join('');
});

const supportDevBtnState = ref(false) // true: hovered, false: inactive

function supportDevBtnHoverEnter() {
  supportDevBtnState.value = true
}

function supportDevBtnHoverLeave() {
  supportDevBtnState.value = false
}
</script>

<template>
  <div class="footer">
    <div class="wrapper">
      <div class="section">
        <div class="brand">
          <RouterLink class="nav-item brand" to="/">
            <img style="width: 32px;" src="/icon.png" />
            <div class="name">Triple Tee App</div>
          </RouterLink>
        </div>

        <div class="paragraph">
          Made with <i class="fa-solid fa-heart"></i> in Singapore.
        </div>

        <div class="paragraph">
          <a
            href="https://www.buymeacoffee.com/gohkhoonhiang"
            target="_blank"
            @mouseover="supportDevBtnHoverEnter"
            @mouseleave="supportDevBtnHoverLeave"
          >
            <img :src="supportDevImgSrc" />
          </a>
        </div>
      </div>

      <div class="section links">
        <div class="column links">
          <div class="title">Project</div>

          <ul class="list">
            <li><a href="#">Documentation</a></li>
            <li><a href="https://github.com/coffeebrewapps/triple_tee-source" target="_blank">Source Code</a></li>
          </ul>
        </div>

        <div class="column links">
          <div class="title">How-Tos</div>

          <ul class="list">
            <li><RouterLink class="nav-item" to="/howto/customtemplate">Customise Template</RouterLink></li>
            <li><RouterLink class="nav-item" to="/howto/cloudsync">Cloud Sync</RouterLink></li>
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
  width: 40%;
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
  gap: 2rem;
  width: 60%;
}

.column.links {
  width: 33%;
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

.links .list li {
  padding: 0.5rem 0;
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
