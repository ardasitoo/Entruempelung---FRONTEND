<script setup>
import { computed } from 'vue'

import AdminDashboard from './components/AdminDashboard.vue'
import CustomerRequestForm from './components/CustomerRequestForm.vue'
import ServiceList from './components/ServiceList.vue'
import LegalPage from './components/LegalPage.vue'

const currentPath = computed(() => window.location.pathname.replace(/\/+$/, '') || '/')
const legalPage = computed(() => ({ '/impressum': 'impressum', '/datenschutz': 'datenschutz' })[currentPath.value])
if (legalPage.value) {
  document.title = `${legalPage.value === 'impressum' ? 'Impressum' : 'Datenschutzerklärung'} | NEXRUM`
}
</script>

<template>
  <AdminDashboard v-if="currentPath === '/admin'" />

  <LegalPage v-else-if="legalPage" :page="legalPage" />

  <template v-else>
    <header class="site-header">
      <a class="brand" href="#top">Entruempelung Service</a>
      <nav class="navigation" aria-label="Hauptnavigation">
        <a href="#leistungen">Leistungen</a>
        <a href="#ablauf">Ablauf</a>
        <a href="#kontakt">Kontakt</a>
      </nav>
    </header>

    <main id="top">
      <section class="hero">
        <div class="hero-content">
          <p class="eyebrow">Entruempelung, Aufloesung, Entsorgung</p>
          <h1>Mehr Platz schaffen. Schnell, sauber und verlaesslich.</h1>
          <p class="hero-text">
            Wir unterstuetzen Privat- und Geschaeftskunden bei Entruempelungen,
            Wohnungsaufloesungen und fachgerechter Entsorgung.
          </p>
          <div class="hero-actions">
            <a class="button primary" href="#kontakt">Anfrage stellen</a>
            <a class="button secondary" href="#leistungen">Leistungen ansehen</a>
          </div>
        </div>
      </section>

      <section id="leistungen" class="section">
        <div class="section-heading">
          <p class="eyebrow">Leistungen</p>
          <h2>Wobei wir helfen</h2>
        </div>
        <ServiceList />
      </section>

      <section id="ablauf" class="section muted">
        <div class="section-heading">
          <p class="eyebrow">Ablauf</p>
          <h2>In drei Schritten zur freien Flaeche</h2>
        </div>
        <div class="steps">
          <div>
            <span>01</span>
            <h3>Anfrage senden</h3>
            <p>Du beschreibst kurz, was entrümpelt werden soll.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Termin abstimmen</h3>
            <p>Wir klaeren Umfang, Zeitfenster und ein passendes Angebot.</p>
          </div>
          <div>
            <span>03</span>
            <h3>Sauber erledigen</h3>
            <p>Das Team raeumt, transportiert und entsorgt fachgerecht.</p>
          </div>
        </div>
      </section>

      <section id="kontakt" class="section contact-section">
        <div class="section-heading">
          <p class="eyebrow">Kontakt</p>
          <h2>Anfrage stellen</h2>
          <p>
            Beschreibe uns dein Vorhaben. Wir melden uns bei dir, um die nächsten Schritte zu besprechen.
          </p>
        </div>
        <CustomerRequestForm />
      </section>
    </main>
  </template>
  <footer class="site-footer">
    <span>© {{ new Date().getFullYear() }} NEXRUM</span>
    <nav aria-label="Rechtliche Informationen">
      <a href="/impressum" :aria-current="legalPage === 'impressum' ? 'page' : undefined">Impressum</a>
      <a href="/datenschutz" :aria-current="legalPage === 'datenschutz' ? 'page' : undefined">Datenschutz</a>
    </nav>
  </footer>
</template>
