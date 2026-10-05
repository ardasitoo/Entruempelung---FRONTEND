<script setup>
import { reactive, ref } from 'vue'
import { apiBaseUrl } from '../config/api'

const initialFormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  serviceType: '',
  address: '',
  postalCode: '',
  preferredDate: '',
  message: '',
}

const form = reactive({ ...initialFormState })
const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

function resetForm() {
  Object.assign(form, initialFormState)
}

async function submitRequest() {
  isSubmitting.value = true
  successMessage.value = ''
  errorMessage.value = ''

  try {
    const response = await fetch(`${apiBaseUrl}/api/customer-requests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...form,
        preferredDate: form.preferredDate || null,
      }),
    })

    if (!response.ok) {
      throw new Error('Die Anfrage konnte nicht gespeichert werden.')
    }

    resetForm()
    successMessage.value = 'Danke, deine Anfrage wurde erfolgreich gespeichert.'
  } catch (error) {
    errorMessage.value = error.message
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <form class="contact-form" @submit.prevent="submitRequest">
    <div class="form-row">
      <label>
        Vorname
        <input v-model="form.firstName" type="text" name="firstName" placeholder="Max" required />
      </label>
      <label>
        Nachname
        <input v-model="form.lastName" type="text" name="lastName" placeholder="Mustermann" required />
      </label>
    </div>

    <div class="form-row">
      <label>
        E-Mail
        <input v-model="form.email" type="email" name="email" placeholder="max@example.com" required />
      </label>
      <label>
        Telefon
        <input v-model="form.phone" type="tel" name="phone" placeholder="+49 170 1234567" />
      </label>
    </div>

    <label>
      Art der Entruempelung
      <select v-model="form.serviceType" name="serviceType" required>
        <option value="" disabled>Bitte auswaehlen</option>
        <option>Wohnungsaufloesung</option>
        <option>Kellerentruempelung</option>
        <option>Garagenentruempelung</option>
        <option>Sperrmuell & Entsorgung</option>
      </select>
    </label>

    <div class="form-row">
      <label>
        Adresse
        <input
          v-model="form.address"
          type="text"
          name="address"
          placeholder="Musterstrasse 12, Berlin"
          required
        />
      </label>
      <label>
        Postleitzahl
        <input
          v-model="form.postalCode"
          type="text"
          name="postalCode"
          inputmode="numeric"
          placeholder="12345"
          required
        />
      </label>
    </div>

    <label>
      Wunschtermin
      <input v-model="form.preferredDate" type="date" name="preferredDate" />
    </label>

    <label>
      Nachricht
      <textarea
        v-model="form.message"
        name="message"
        rows="5"
        placeholder="Was soll entruempelt werden?"
      ></textarea>
    </label>

    <button type="submit" :disabled="isSubmitting">
      {{ isSubmitting ? 'Anfrage wird gesendet...' : 'Anfrage senden' }}
    </button>

    <p v-if="successMessage" class="success-text">{{ successMessage }}</p>
    <p v-if="errorMessage" class="error-text">{{ errorMessage }}</p>
  </form>
</template>
