<script setup>
import { computed, ref } from 'vue'
import { apiBaseUrl } from '../config/api'

const username = ref('')
const password = ref('')
const customerRequests = ref([])
const isLoading = ref(false)
const errorMessage = ref('')
const isLoggedIn = ref(false)

const statusOptions = [
  { value: 'NEW', label: 'Neu' },
  { value: 'CONTACTED', label: 'Kontaktiert' },
  { value: 'OFFER_SENT', label: 'Angebot gesendet' },
  { value: 'ACCEPTED', label: 'Angenommen' },
  { value: 'REJECTED', label: 'Abgelehnt' },
  { value: 'COMPLETED', label: 'Abgeschlossen' },
]
const selectedStatuses = ref({})
const savingStatuses = ref({})
const statusMessages = ref({})
const statusErrors = ref({})
const statusLabel = (status) => statusOptions.find((option) => option.value === status)?.label || status

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
    selectedStatuses.value = Object.fromEntries(customerRequests.value.map((request) => [request.id, request.status]))
    statusMessages.value = {}
    statusErrors.value = {}
    isLoggedIn.value = true
  } catch (error) {
    customerRequests.value = []
    isLoggedIn.value = false
    errorMessage.value = error.message
  } finally {
    isLoading.value = false
  }
}

async function saveStatus(request) {
  const id = request.id
  savingStatuses.value[id] = true
  statusMessages.value[id] = ''
  statusErrors.value[id] = ''
  try {
    const response = await fetch(`${apiBaseUrl}/api/customer-requests/${id}/status`, {
      method: 'PATCH',
      headers: { Authorization: createAuthorizationHeader(), 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: selectedStatuses.value[id] }),
    })
    if (response.status === 401 || response.status === 403) {
      throw new Error('Keine Berechtigung. Bitte erneut anmelden.')
    }
    if (response.status === 404) throw new Error('Diese Anfrage wurde nicht gefunden. Bitte die Übersicht aktualisieren.')
    if (!response.ok) throw new Error('Der Status konnte nicht gespeichert werden. Bitte erneut versuchen.')
    const updated = await response.json()
    request.status = updated.status
    statusMessages.value[id] = 'Status gespeichert.'
  } catch (error) {
    statusErrors.value[id] = error.message === 'Load failed' || error instanceof TypeError
      ? 'Keine Verbindung zum Server. Bitte erneut versuchen.' : error.message
  } finally {
    savingStatuses.value[id] = false
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
        <button type="submit" :disabled="isLoading || Object.values(savingStatuses).some(Boolean)">
          {{ isLoading ? 'Anmelden...' : 'Anmelden' }}
        </button>
        <p v-if="errorMessage" class="error-text">{{ errorMessage }}</p>
      </form>

      <div v-else class="admin-content">
        <div class="admin-toolbar">
          <p>{{ customerRequests.length }} Anfrage(n)</p>
          <div class="admin-actions">
            <button type="button" class="secondary admin-action-button" :disabled="isLoading || Object.values(savingStatuses).some(Boolean)" @click="loadCustomerRequests">
              Aktualisieren
            </button>
            <button type="button" class="admin-action-button" :disabled="Object.values(savingStatuses).some(Boolean)" @click="logout">Abmelden</button>
          </div>
        </div>

        <p v-if="isLoading" class="info-text">Anfragen werden geladen...</p>
        <p v-else-if="!hasRequests" class="info-text">Es liegen noch keine Anfragen vor.</p>

        <div v-else class="admin-request-list">
          <article v-for="request in customerRequests" :key="request.id" class="admin-request-card">
            <div class="admin-request-topline">
              <div>
                <p class="request-status">{{ statusLabel(request.status) }}</p>
                <h2>{{ request.firstName }} {{ request.lastName }}</h2>
              </div>
              <span>#{{ request.id }}</span>
            </div>

            <form class="status-editor" @submit.prevent="saveStatus(request)">
              <label :for="`status-${request.id}`">Auftragsstatus</label>
              <div class="status-controls">
                <select :id="`status-${request.id}`" v-model="selectedStatuses[request.id]" :disabled="savingStatuses[request.id]">
                  <option v-for="option in statusOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
                </select>
                <button type="submit" :disabled="savingStatuses[request.id] || selectedStatuses[request.id] === request.status">
                  {{ savingStatuses[request.id] ? 'Speichert…' : 'Status speichern' }}
                </button>
              </div>
              <p v-if="statusMessages[request.id]" role="status">{{ statusMessages[request.id] }}</p>
              <p v-if="statusErrors[request.id]" class="error-text" role="alert">{{ statusErrors[request.id] }}</p>
            </form>

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
                <dt>Postleitzahl</dt>
                <dd>{{ request.postalCode }}</dd>
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
