<script setup>
import { computed } from 'vue'

import AdminDashboard from './components/AdminDashboard.vue'
import CustomerRequestForm from './components/CustomerRequestForm.vue'
import ServiceList from './components/ServiceList.vue'
import LegalPage from './components/LegalPage.vue'
import BrandWordmark from './components/BrandWordmark.vue'

const props = defineProps({ path: { type: String, default: '' } })
const currentPath = computed(() => (props.path || window.location.pathname).replace(/\/+$/, '') || '/')
const legalPage = computed(() => ({ '/impressum': 'impressum', '/datenschutz': 'datenschutz' })[currentPath.value])
</script>

<template>
  <AdminDashboard v-if="currentPath === '/admin'" />

  <LegalPage v-else-if="legalPage" :page="legalPage" />

  <template v-else>
    <header class="site-header">
      <a class="brand" href="#top" aria-label="NEXRUM Startseite"><BrandWordmark /></a>
      <nav class="navigation" aria-label="Hauptnavigation">
        <a href="#leistungen">Leistungen</a>
        <a href="#ablauf">So läuft’s</a>
        <a href="#kontakt">Kontakt</a>
      </nav>
      <a class="button header-cta" href="#kontakt">Kostenlose Anfrage <span aria-hidden="true">↗</span></a>
    </header>

    <main id="top">
      <section class="hero">
        <div class="hero-content">
          <p class="eyebrow"><span class="eyebrow-line" aria-hidden="true"></span> NEXRUM · Entrümpelung &amp; Umzüge in Berlin</p>
          <h1>Platz für das,<br />was <span>kommt.</span></h1>
          <p class="hero-text">NEXRUM unterstützt dich in Berlin bei Entrümpelungen, Wohnungsauflösungen, Umzügen und fachgerechter Entsorgung. Einfache Streicharbeiten für eine saubere Übergabe bieten wir auf Wunsch an.</p>
          <div class="hero-actions">
            <a class="button primary" href="#kontakt">Kostenlose Anfrage stellen <span aria-hidden="true">↗</span></a>
            <a class="text-link" href="#leistungen">Leistungen entdecken <span aria-hidden="true">↓</span></a>
          </div>
          <div class="hero-notes"><span><b aria-hidden="true">✓</b> Unverbindlich anfragen</span><span><b aria-hidden="true">✓</b> Persönlich abstimmen</span></div>
        </div>
        <div class="hero-visual" role="img" aria-label="Professionelle Reinigung eines hellen Raums">
          <div class="hero-photo-caption"><span>NEXRUM</span><strong>Raum für Neues.</strong><p>Entrümpelung. Umzug. Neuer Anfang.</p></div>
          <span class="photo-label">KLARER PLAN. FREIER RAUM.</span>
        </div>
      </section>

      <section id="leistungen" class="section">
        <div class="section-heading split-heading">
          <div><p class="eyebrow">01 / Unsere Leistungen</p><h2>Entrümpelung &amp; Umzüge.<br />Für dich in Berlin.</h2></div>
          <p>Vom einzelnen Raum bis zum Umzug: Wir helfen dir, den nächsten Schritt übersichtlich und unkompliziert anzugehen – auf Wunsch auch mit einfachen Streicharbeiten zur Übergabe.</p>
        </div>
        <ServiceList />
      </section>

      <section id="ablauf" class="process-section">
        <div class="section">
          <div class="section-heading"><p class="eyebrow">02 / Der Ablauf</p><h2>Klar geplant.<br />Sauber erledigt.</h2><p>Du sagst uns, was ansteht. Gemeinsam stimmen wir die nächsten Schritte ab.</p></div>
          <div class="steps">
            <article><span class="step-number">01</span><h3>Vorhaben beschreiben</h3><p>Beschreibe die gewünschte Leistung und was dir bei deinem Vorhaben wichtig ist.</p></article>
            <article><span class="step-number">02</span><h3>Gemeinsam abstimmen</h3><p>Wir besprechen Umfang, Termin und Angebot. So weißt du, was dich erwartet.</p></article>
            <article><span class="step-number">03</span><h3>Raum zurückgewinnen</h3><p>Wir setzen die vereinbarten Leistungen um – von der Räumung bis zum Umzug, auf Wunsch mit einfachen Streicharbeiten zur Übergabe.</p></article>
          </div>
        </div>
      </section>

      <section id="kontakt" class="section contact-section">
        <div class="contact-intro">
          <p class="eyebrow">03 / Dein nächster Schritt</p><h2>Was darf für dich <span>gehen?</span></h2>
          <p>Erzähl uns von deinem Vorhaben. Wir melden uns bei dir und stimmen alles Weitere persönlich ab.</p>
          <div class="contact-details"><span>Lieber direkt sprechen?</span><a href="tel:+4915170162872">0151 70162872 <span aria-hidden="true">↗</span></a><a class="contact-email" href="mailto:info.entruempelungen@web.de">info.entruempelungen@web.de</a></div>
          <p class="contact-small">Deine Anfrage ist kostenlos und unverbindlich.</p>
        </div>
        <div class="form-shell"><h3>Deine Anfrage an NEXRUM</h3><p>Ein paar Angaben genügen für den Anfang.</p><CustomerRequestForm /></div>
      </section>
    </main>
  </template>
  <footer class="site-footer">
    <div class="footer-brand"><BrandWordmark /><span>Raum für Neues.</span></div>
    <span class="footer-copyright">© {{ new Date().getFullYear() }} NEXRUM</span>
    <nav aria-label="Rechtliche Informationen">
      <a href="/impressum" :aria-current="legalPage === 'impressum' ? 'page' : undefined">Impressum</a>
      <a href="/datenschutz" :aria-current="legalPage === 'datenschutz' ? 'page' : undefined">Datenschutz</a>
    </nav>
  </footer>
</template>
