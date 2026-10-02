<script setup>
import { computed, ref } from 'vue'
import { apiBaseUrl } from '../config/api'

const username = ref('')
const password = ref('')
const customerRequests = ref([])
const isLoading = ref(false)
const errorMessage = ref('')
const isLoggedIn = ref(false)

const hasRequests = computed(() => customerRequests.value.length > 0)

function createAuthorizationHeader() {
  return `Basic ${btoa(`${username.value}:${password.value}`)}`
}

async function loadCustomerRequests() {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const response = await fetch(`${apiBaseUrl}/api/customer-requests`, {
      headers: {
        Authorization: createAuthorizationHeader(),
      },
    })

    if (response.status === 401) {
      throw new Error('Login fehlgeschlagen. Bitte Zugangsdaten pruefen.')
    }

    if (!response.ok) {
      throw new Error('Die Anfragen konnten nicht geladen werden.')
    }

    customerRequests.value = await response.json()
    isLoggedIn.value = true
  } catch (error) {
    customerRequests.value = []
    isLoggedIn.value = false
    errorMessage.value = error.message
  } finally {
    isLoading.value = false
  }
}

function logout() {
  password.value = ''
  customerRequests.value = []
  isLoggedIn.value = false
  errorMessage.value = ''
}
</script>

<template>
  <main class="admin-page">
    <section class="admin-shell">
      <div class="admin-header">
        <div>
          <p class="eyebrow">Admin</p>
          <h1>Kundenanfragen</h1>
          <p>Geschuetzte Uebersicht fuer eingegangene Entruempelungsanfragen.</p>
        </div>
        <a class="button secondary admin-back-link" href="/">Zur Website</a>
      </div>

      <form v-if="!isLoggedIn" class="admin-login" @submit.prevent="loadCustomerRequests">
        <label>
          Benutzername
          <input v-model="username" type="text" autocomplete="username" required />
        </label>
        <label>
          Passwort
          <input v-model="password" type="password" autocomplete="current-password" required />
        </label>
        <button type="submit" :disabled="isLoading">
          {{ isLoading ? 'Anmelden...' : 'Anmelden' }}
        </button>
        <p v-if="errorMessage" class="error-text">{{ errorMessage }}</p>
      </form>

      <div v-else class="admin-content">
        <div class="admin-toolbar">
          <p>{{ customerRequests.length }} Anfrage(n)</p>
          <div class="admin-actions">
            <button type="button" class="secondary admin-action-button" @click="loadCustomerRequests">
              Aktualisieren
            </button>
            <button type="button" class="admin-action-button" @click="logout">Abmelden</button>
          </div>
        </div>

        <p v-if="isLoading" class="info-text">Anfragen werden geladen...</p>
        <p v-else-if="!hasRequests" class="info-text">Es liegen noch keine Anfragen vor.</p>

        <div v-else class="admin-request-list">
          <article v-for="request in customerRequests" :key="request.id" class="admin-request-card">
            <div class="admin-request-topline">
              <div>
                <p class="request-status">{{ request.status }}</p>
                <h2>{{ request.firstName }} {{ request.lastName }}</h2>
              </div>
              <span>#{{ request.id }}</span>
            </div>

            <dl class="request-details">
              <div>
                <dt>E-Mail</dt>
                <dd>
                  <a :href="`mailto:${request.email}`">{{ request.email }}</a>
                </dd>
              </div>
              <div>
                <dt>Telefon</dt>
                <dd>{{ request.phone || 'Nicht angegeben' }}</dd>
              </div>
              <div>
                <dt>Leistung</dt>
                <dd>{{ request.serviceType }}</dd>
              </div>
              <div>
                <dt>Wunschtermin</dt>
                <dd>{{ request.preferredDate || 'Nicht angegeben' }}</dd>
              </div>
              <div>
                <dt>Adresse</dt>
                <dd>{{ request.address }}</dd>
              </div>
              <div>
                <dt>Eingegangen</dt>
                <dd>{{ request.createdAt }}</dd>
              </div>
            </dl>

            <p class="admin-message">{{ request.message || 'Keine Nachricht angegeben.' }}</p>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>
