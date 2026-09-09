<script setup>
import { onMounted, ref } from 'vue'

const customerRequests = ref([])
const isLoading = ref(true)
const errorMessage = ref('')

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'

onMounted(async () => {
  try {
    const response = await fetch(`${apiBaseUrl}/api/customer-requests`)

    if (!response.ok) {
      throw new Error('Die Kundenanfragen konnten nicht geladen werden.')
    }

    customerRequests.value = await response.json()
  } catch (error) {
    errorMessage.value = error.message
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <div class="request-list">
    <p v-if="isLoading" class="info-text">Kundenanfragen werden geladen...</p>
    <p v-else-if="errorMessage" class="error-text">{{ errorMessage }}</p>
    <div v-else class="request-grid">
      <article v-for="request in customerRequests" :key="request.id" class="request-card">
        <div>
          <p class="request-status">{{ request.status }}</p>
          <h3>{{ request.firstName }} {{ request.lastName }}</h3>
        </div>
        <p>{{ request.serviceType }}</p>
        <p>{{ request.address }}</p>
        <p>{{ request.message }}</p>
      </article>
    </div>
  </div>
</template>
