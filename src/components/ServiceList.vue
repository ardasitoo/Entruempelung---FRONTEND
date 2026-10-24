<script setup>
const services = [
  { title: 'Wohnungsauflösung', description: 'Eine Wohnung, ein neuer Anfang. Wir übernehmen Räumung, Transport und Entsorgung.', icon: 'M3 10 12 3l9 7M5 9v12h14V9M9 21v-7h6v7' },
  { title: 'Kellerentrümpelung', description: 'Wieder Platz für das Wesentliche. Wir räumen Keller, Abstellräume und Lagerflächen.', icon: 'M3 7h18v14H3zM7 3v4m10-4v4M3 12h18M8 16h8' },
  { title: 'Garagenentrümpelung', description: 'Freie Fläche statt voller Garage. Wir sortieren, räumen und entsorgen alte Gegenstände.', icon: 'M3 21V8l9-5 9 5v13M7 21V11h10v10M7 15h10M7 18h10' },
  { title: 'Sperrmüll & Entsorgung', description: 'Weg mit dem, was nicht mehr gebraucht wird. Abholung und fachgerechte Entsorgung.', icon: 'M3 5h12v12H3zM15 9h4l3 4v4h-7M7 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4m11 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4' },
  { title: 'Umzüge', description: 'Ein neuer Ort, ein klarer Plan. Wir unterstützen dich beim Umzug – Umfang und Ablauf stimmen wir persönlich mit dir ab.', icon: 'M3 4h11v13H3zM14 9h5l3 4v4h-8M7 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4m11 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4M6 8h5M8.5 6v4' },
  { title: 'Malerarbeiten auf Wunsch', description: 'Ein frischer Anstrich für deinen nächsten Schritt. Auf Wunsch besprechen wir passende Malerarbeiten und erstellen ein individuelles Angebot.', icon: 'M4 3h13v6H4zM17 5h3v7h-9v3M9 15h4v7H9z' },
]
</script>
<template>
  <div class="service-grid">
    <a v-for="(service, index) in services" :key="service.title" class="service-card" href="#kontakt">
      <div class="service-card-top"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path :d="service.icon" /></svg><span>0{{ index + 1 }}</span></div>
      <h3>{{ service.title }}</h3><p>{{ service.description }}</p><span class="service-card-link">Unverbindlich anfragen <span aria-hidden="true">↗</span></span>
    </a>
  </div>
</template>
