<script setup>
import { RouterLink } from 'vue-router';
import CardsContainer from '@/components/CardsContainer.vue';

const allInOneCards = [
  {
    title: 'Step 1',
    icon: 'fa-solid fa-clock',
    content: 'Track the work done for each client down to the second.',
  },
  {
    title: 'Step 2',
    icon: 'fa-solid fa-dollar-sign',
    content: 'Configure billing rates and generate invoices based on tracked hours.',
  },
  {
    title: 'Step 3',
    icon: 'fa-solid fa-calculator',
    content: 'Receive payments, generate receipts, and estimate taxes from recorded income.',
  },
];

const tagsBasedCards = [
  {
    title: 'Work Logs',
    icon: 'fa-solid fa-briefcase',
    content: 'Work for multiple clients at once? Tag your work logs to each client, so that you can have a clear view of how much work has been done for each.',
  },
  {
    title: 'Invoicing and Billing',
    icon: 'fa-solid fa-file-invoice',
    content: 'Make use of the tags to filter work logs to calculate billable hours and invoice each client accordingly.',
  },
  {
    title: 'Taxes',
    icon: 'fa-solid fa-dollar-sign',
    content: 'Some business expenses are tax-deductible. Use tags to mark them and the app will automatically calculate these as tax deductibles.',
  },
];

const templatesCards = [
  {
    title: 'Invoice',
    icon: 'fa-solid fa-file-invoice-dollar',
    content: 'Customise the billing items, add a discount line for long-time clients, maybe even paint a few shades of colour for a vibrant feel.',
  },
  {
    title: 'Receipt',
    icon: 'fa-solid fa-receipt',
    content: 'Precisely display the payment schedule for clients on instalments, or hide the unnecessary information for one-time clients.',
  },
];

const dataCards = [
  {
    title: 'Offline',
    icon: 'fa-solid fa-plug-circle-xmark',
    content: 'None of your data live on the Internet, so no one can leak or sell your data, not even us.',
  },
  {
    title: 'Plain',
    icon: 'fa-solid fa-file',
    content: 'All data are stored as plain JSON files, you should never have to install a database client just to see your own data.',
  },
  {
    title: 'Cloud Sync-supported',
    icon: 'fa-solid fa-rotate',
    content: 'If you really wished, you could use a cloud-synced directory, eg. iCloud, Drive for you data files, so you can access your data on multiple devices.',
  },
];

const muchMore1Cards = [
  {
    title: 'Multi-currency Support',
    icon: 'fa-solid fa-coins',
    content: 'The app supports multiple currencies, so you can localise the invoices for your international clients.',
  },
  {
    title: 'Configurable Timezone',
    icon: 'fa-solid fa-globe',
    content: 'You may be overseas but still want to view the data in your home timezone. The app allows you to configure your display timezone regardless of your geographical location.',
  },
];

const muchMore2Cards = [
  {
    title: 'Switch Theme',
    icon: 'fa-solid fa-circle-half-stroke',
    content: 'The app automatically detects your system default theme and shows light theme or dark theme accordingly. You can also switch the theme in app.',
  },
  {
    title: 'Stylable Tags',
    icon: 'fa-solid fa-palette',
    content: 'Tags are stylable, so the data visually makes sense even without reading the detailed texts.',
  },
];
</script>

<template>
  <main class="main">
    <div class="hero">
      <div class="wrapper">
        <div class="title">
          Making accounting simple and flexible.
        </div>

        <div class="subtitle">
          An app designed for the solopreneurs.
        </div>
      </div>
    </div>

    <div class="section all-in-one odd">
      <div class="wrapper">
        <div class="title">All-in-one</div>
        <div class="subtitle">Log your work, invoice your clients, estimate taxes.</div>

        <div class="paragraph">
          This app takes care of your business from the moment you start doing work. Log the hours you have worked for
          each client, generate invoices based on billable hours, record payment receipts and estimate taxes based on
          received income.
        </div>

        <CardsContainer
          :cards="allInOneCards"
        />
      </div>
    </div>

    <div class="section even">
      <div class="wrapper">
        <div class="title">Tags Based</div>
        <div class="subtitle">Use tags to customise the app logic.</div>

        <div class="paragraph">
          Different businesses have different use cases. Don't let the app dictate how you do yours. Make use of tags
          to customise the behaviour of the app to serve your needs.
        </div>

        <CardsContainer
          :cards="tagsBasedCards"
        />
      </div>
    </div>

    <div class="section odd">
      <div class="wrapper">
        <div class="title">Customisable Templates</div>
        <div class="subtitle">Make your client feel special.</div>

        <div class="paragraph">
          Not every invoice template works for every client. Customise the information that is most relevant for each
          client.
        </div>

        <CardsContainer
          :cards="templatesCards"
        />
      </div>
    </div>

    <div class="section even">
      <div class="wrapper">
        <div class="title">Data Ownership</div>
        <div class="subtitle">Your data, your control.</div>

        <div class="paragraph">
          You have complete control over your data. The app runs offline on your machine, and there's no data transfer
          to the cloud. All data files are in plain JSON format, no need to install database clients just to view your
          own data.
        </div>

        <CardsContainer
          :cards="dataCards"
        />
      </div>
    </div>

    <div class="section odd">
      <div class="wrapper">
        <div class="title">And much more</div>

        <CardsContainer
          :cards="muchMore1Cards"
        />

        <CardsContainer
          :cards="muchMore2Cards"
        />
      </div>
    </div>

    <div class="section even">
      <div class="wrapper">
        <div class="title">Try It Now</div>

        <div class="paragraph">
          Try out the demo right now on the web. Don't worry, all the data live within your browser's local storage, so
          your data won't be seen by other demo users.
        </div>

        <RouterLink class="button" to="/demo">
          Launch Demo
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.wrapper {
  margin: 0 auto;
  padding: 2rem 1rem;
  max-width: 80vw;
}

.hero {
  display: flex;
  align-items: center;
  min-height: 50vh;
}

.hero .wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero .title {
  font-size: 4rem;
  font-weight: 900;
  line-height: 4rem;
}

.hero .subtitle {
  font-size: 2rem;
}

.section {
  margin: 0;
  padding: 0;
  min-height: 50vh;
}

.section.odd {
  background-color: var(--color-background-soft);
}

.section.even {
  background-color: var(--color-background);
}

.section .wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.section .title {
  font-weight: 600;
  text-transform: uppercase;
  padding: 1rem 0;
}

.section .subtitle {
  font-size: 1.6rem;
  font-weight: 600;
}

.section .paragraph {
  max-width: 60%;
}

.section .button {
  margin: 2rem 0;
  padding: 0.8rem 1.6rem;
  background-color: var(--color-border);
  border-radius: 1rem;
  font-size: 1.6rem;
  font-weight: 600;
}

.section .button:hover {
  cursor: pointer;
  background-color: var(--color-border-hover);
}

@media (max-width: 960px) {
  .wrapper {
    max-width: 90vw !important;
  }

  .hero .title {
    font-size: 3rem !important;
    line-height: 3rem !important;
    margin-bottom: 1rem !important;
  }

  .hero .subtitle {
    font-size: 1.6rem !important;
    line-height: 2rem !important;
  }

  .section .paragraph {
    max-width: 100%;
  }
}

@media (min-width: 1920px) {
  .wrapper {
    max-width: 60vw !important;
  }
}
</style>
