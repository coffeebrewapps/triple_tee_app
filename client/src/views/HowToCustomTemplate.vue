<script setup>
import { onMounted, ref, computed } from 'vue';
import TabContainer from '@/components/TabContainer.vue';
import CodeContainer from '@/components/CodeContainer.vue';

const tabs = [
  {
    name: 'Markup',
  },
  {
    name: 'Styles',
  },
  {
    name: 'Sample Data',
  },
  {
    name: 'PDF Preview',
  },
];

const markup = `
<div class="invoice-container">
  <div class="header">
    <div class="recipient">
      <div class="name">{{ billingContact.name }}</div>
      <div class="address">{{ billingContact.addressLine1 }}</div>
      <div class="address">{{ billingContact.addressLine2 }}</div>
      <div class="address">{{ billingContact.addressLine3 }}</div>
      <div class="address">{{ billingContact.city }}</div>
      <div class="address">{{ billingContact.state }}</div>
      <div class="address">{{ billingContact.country }}</div>
    </div>
  </div>
  <div class="metadata">
    <div class="line">
      <div class="label">Invoice No.</div>
      <div class="field">
        {{ invoiceNumberSequence.prefix }}-
        {{ invoice.invoiceNumber | prepend: '000000' | slice: -6, 6 }}-
        {{ invoiceNumberSequence.suffix }}
      </div>
    </div>
    <div class="line">
      <div class="label">Invoice Date</div>
      <div class="field">{{ invoice.invoiceDate | date: "%Y-%m-%d" }}</div>
    </div>
    <div class="line">
      <div class="label">Due Date</div>
      <div class="field">{{ invoice.dueDate  | date: "%Y-%m-%d" }}</div>
    </div>
  </div>
  <div class="lines">
    <table class="invoice-table">
      <thead>
        <tr>
         <th class="description">Description</th>
         <th class="unit-cost">Unit Cost</th>
         <th class="unit">Unit</th>
         <th class="subtotal">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {% for line in invoiceLines %}
          <tr>
            <td class="description">{{ line.description }}</td>
            <td class="unit-cost">{{ line.unitCost }}</td>
            <td class="unit">{{ line.unit }}</td>
            <td class="subtotal">{{ line.subtotal | round: 2 }}</td>
          </tr>
        {% endfor %}
      </tbody>
      <tfoot>
        <tr>
          <td class="description"></td>
          <td class="unit-cost"></td>
          <td class="unit">Total</td>
          <td class="subtotal">{{ invoice.totalAmount | round: 2 }}</td>
        <tr>
      </tfoot>
    </table>
  </div>
  <div class="footer">
    <div class="note">This is a system generated invoice. No signature is required.</div>
  </div>
</div>`;

const styles = `
.invoice-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  color: black;
  width: 100%;
}

.invoice-container .header {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  font-size: 1.2rem;
}

.invoice-container .header .sender,
.invoice-container .header .recipient {
  padding: 0.5rem;
  width: 50%;
}

.invoice-container .header .name {
  font-weight: 900;
}

.invoice-container .header .address {
  font-size: 0.8rem;
}

.invoice-container .metadata {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-end;
}

.invoice-container .metadata .line {
  display: flex;
  align-items: center;
  width: 250px;
}

.invoice-container .metadata .label {
  padding: 0 0.5rem;
  font-size: 0.8rem;
  font-weight: 900;
}

.invoice-container .metadata .field {
  padding: 0 0.5rem;
}

.invoice-container .lines {
  padding: 1rem;
  width: 100%;
  min-height: 500px;
}

.invoice-container .lines .invoice-table {
  width: 100%;
  border-collapse: collapse;
}

.invoice-container .lines thead .description {
  padding: 0.5rem 0;
  width: 40%;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 900;
}

.invoice-container .lines thead .unit-cost,
.invoice-container .lines thead .unit,
.invoice-container .lines thead .subtotal {
  padding: 0.5rem 0;
  width: 20%;
  text-align: left;
  font-size: 0.8rem;
  font-weight: 900;
}

.invoice-container .lines tbody td {
  padding: 0.5rem 0;
}

.invoice-container .lines tbody tr:last-child td {
  padding-bottom: 1rem;
}

.invoice-container .lines tfoot td {
  padding: 0.5rem 0;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
}

.invoice-container .lines tfoot .unit {
  font-size: 0.8rem;
  font-weight: 900;
}

.invoice-container .lines tfoot .subtotal {
  font-weight: 900;
}

.invoice-container .footer {
  margin: 0 auto;
}

.invoice-container .footer .note {
  font-weight: 600;
}`;

const sampleData = `
{
  "billingContact": {
    "name": "Company ABC",
    "addressLine1": "123 City St",
    "city": "Singapore",
    "postcode": "123456",
    "country": "Singapore"
  },
  "invoiceNumberSequence": {
    "prefix": "INV",
    "suffix": "ABC"
  },
  "invoice": {
    "invoiceNumber": "1",
    "invoiceDate": "2023-01-01",
    "dueDate": "2023-01-31",
    "totalAmount": 2148.66
  },
  "invoiceLines": [
    {
      "description": "Understand requirements",
      "unitCost": 75,
      "unit": 4.2,
      "subtotal": 315
    },
    {
      "description": "Implement website",
      "unitCost": 85,
      "unit": 19.7,
      "subtotal": 1674.5
    },
    {
      "description": "Sales Tax (8%)",
      "subtotal": 159.16
    }
  ]
}`;

const parsedMarkup = `
<div class="invoice-container">
  <div class="header">
    <div class="recipient">
      <div class="name">Company ABC</div>
      <div class="address">123 City St</div>
      <div class="address"></div>
      <div class="address"></div>
      <div class="address">Singapore</div>
      <div class="address"></div>
      <div class="address">Singapore</div>
    </div>
  </div>
  <div class="metadata">
    <div class="line">
      <div class="label">Invoice No.</div>
      <div class="field">INV-000001-ABC</div>
    </div>
    <div class="line">
      <div class="label">Invoice Date</div>
      <div class="field">2023-01-01</div>
    </div>
    <div class="line">
      <div class="label">Due Date</div>
      <div class="field">2023-01-31</div>
    </div>
  </div>
  <div class="lines">
    <table class="invoice-table">
      <thead>
        <tr>
         <th class="description">Description</th>
         <th class="unit-cost">Unit Cost</th>
         <th class="unit">Unit</th>
         <th class="subtotal">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="description">Understand requirements</td>
          <td class="unit-cost">75</td>
          <td class="unit">4.2</td>
          <td class="subtotal">315</td>
        </tr>
        <tr>
          <td class="description">Implement website</td>
          <td class="unit-cost">85</td>
          <td class="unit">19.7</td>
          <td class="subtotal">1674.5</td>
        </tr>
        <tr>
          <td class="description">Sales Tax (8%)</td>
          <td class="unit-cost"></td>
          <td class="unit"></td>
          <td class="subtotal">159.16</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="description"></td>
          <td class="unit-cost"></td>
          <td class="unit">Total</td>
          <td class="subtotal">2148.66</td>
        <tr>
      </tfoot>
    </table>
  </div>
  <div class="footer">
    <div class="note">This is a system generated invoice. No signature is required.</div>
  </div>
</div>`;

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <div class="page-container">
    <h1>How To Customise Template</h1>

    <p class="paragraph">
      Triple Tee App allows you to customise invoice and receipt templates for different clients. It is built to be
      as simple as possible to design a template, using commonly known markup language, HTML, and styling language,
      CSS.
    </p>

    <p class="paragraph">
      To allow for more dynamic behaviour, we use a templating language, Liquid (developed by Shopify), to inject data
      that can be interpreted at the time of generating the document. To learn more about Liquid, do visit the official
      documentation site at
      <a target="_blank" href="https://shopify.github.io/liquid/">https://shopify.github.io/liquid/</a>.
    </p>

    <h2>Understanding the Template Components</h2>

    <p class="paragraph">
      There're 3 parts to a template: markup, styles and data.
    </p>

    <p class="paragraph">
      Markup provides the skeleton of the document, definining where each text should be placed, and if dynamic
      behaviour is required, what data to inject at the position.
    </p>

    <p class="paragraph">
      Styles tell how the document should look. What should be the font size of the heading? What is the colour to use
      for the background? How far away the texts should be separated?
    </p>

    <p class="paragraph">
      Every invoice or receipt is generated for a different billing purpose, but it's
      not feasible to create one template for each instance of an invoice. Data are used to allow for a single template
      to be reused over and over for multiple instances.
    </p>

    <h2>Example</h2>

    <p class="paragraph">
      Here, we show an example of an invoice template broken down into individual components.
    </p>

    <TabContainer
      :tabs="tabs"
    >

      <template #tab-content.0>
        <CodeContainer
          :code="markup"
          language="html"
        />
      </template>

      <template #tab-content.1>
        <CodeContainer
          :code="styles"
          language="css"
        />
      </template>

      <template #tab-content.2>
        <CodeContainer
          :code="sampleData"
          language="json"
        />
      </template>

      <template #tab-content.3>
        <div class="preview-container">
          <component is="style">
            {{ styles }}
          </component>

          <div
            v-html="parsedMarkup"
          >
          </div>
        </div>
      </template>

    </TabContainer>
  </div>
</template>

<style scoped>
.preview-container {
  margin: 0 auto;
  width: 892px;
  height: 1262px;
  border-radius: 4px;
  border: 1px solid var(--color-border);
}
</style>
