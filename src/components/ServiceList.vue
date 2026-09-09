<script setup>
const services = [
  {
    id: 1,
    title: 'Wohnungsaufloesung',
    description: 'Komplette Raeumung von Wohnungen inklusive Transport und Entsorgung.',
  },
  {
    id: 2,
    title: 'Kellerentruempelung',
    description: 'Strukturierte Entruempelung von Kellern, Abstellraeumen und Lagerflaechen.',
  },
  {
    id: 3,
    title: 'Garagenentruempelung',
    description: 'Fachgerechte Sortierung und Entsorgung von alten Gegenstaenden aus Garagen.',
  },
  {
    id: 4,
    title: 'Sperrmuell & Entsorgung',
    description: 'Abholung und verantwortungsvolle Entsorgung von Sperrmuell und Altmaterial.',
  },
]
</script>

<template>
  <div class="service-grid">
    <article v-for="service in services" :key="service.id" class="service-card">
      <h3>{{ service.title }}</h3>
      <p>{{ service.description }}</p>
    </article>
  </div>
</template>
