<script setup>
import { ref } from 'vue'

import CustomerRequestForm from './components/CustomerRequestForm.vue'
import CustomerRequestList from './components/CustomerRequestList.vue'
import ServiceList from './components/ServiceList.vue'

const requestListRefreshKey = ref(0)

function refreshCustomerRequests() {
  requestListRefreshKey.value += 1
}
</script>

<template>
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

    <section id="anfragen" class="section">
      <div class="section-heading">
        <p class="eyebrow">Backend API</p>
        <h2>Beispiel-Anfragen aus dem Backend</h2>
        <p>
          Diese Liste wird ueber die GET-Route
          <code>/api/customer-requests</code> geladen.
        </p>
      </div>
      <CustomerRequestList :refresh-key="requestListRefreshKey" />
    </section>

    <section id="kontakt" class="section contact-section">
      <div class="section-heading">
        <p class="eyebrow">Kontakt</p>
        <h2>Anfrage stellen</h2>
        <p>
          Deine Angaben werden an das Backend gesendet und dort als neue
          Kundenanfrage gespeichert.
        </p>
      </div>
      <CustomerRequestForm @request-created="refreshCustomerRequests" />
    </section>
  </main>
</template>
