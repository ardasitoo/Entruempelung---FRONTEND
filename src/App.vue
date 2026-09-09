<script setup>
const services = [
  'Wohnungsaufloesung',
  'Kellerentruempelung',
  'Garagenentruempelung',
  'Sperrmuell & Entsorgung',
]
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
      <div class="service-grid">
        <article v-for="service in services" :key="service" class="service-card">
          <h3>{{ service }}</h3>
          <p>
            Besichtigung, Planung, Transport und Entsorgung werden strukturiert
            vorbereitet und sauber umgesetzt.
          </p>
        </article>
      </div>
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
        <h2>Anfrage vorbereiten</h2>
        <p>
          Das Formular wird im naechsten Schritt mit dem Backend verbunden. Die
          API ist bereits unter <code>/api/customer-requests</code> vorbereitet.
        </p>
      </div>
      <form class="contact-form">
        <label>
          Name
          <input type="text" name="name" placeholder="Max Mustermann" />
        </label>
        <label>
          E-Mail
          <input type="email" name="email" placeholder="max@example.com" />
        </label>
        <label>
          Nachricht
          <textarea name="message" rows="5" placeholder="Was soll entruempelt werden?"></textarea>
        </label>
        <button type="button">Anfrage bald senden</button>
      </form>
    </section>
  </main>
</template>
