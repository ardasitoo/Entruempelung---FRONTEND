<script setup>
const message = 'Hallo NEXRUM, ich interessiere mich für eure Dienstleistungen und möchte ein unverbindliches Angebot anfragen.'
const whatsappUrl = `https://wa.me/4915170162872?text=${encodeURIComponent(message)}`
</script>

<template>
  <a
    class="whatsapp-contact"
    :href="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="NEXRUM über WhatsApp kontaktieren (öffnet einen neuen Tab oder WhatsApp)"
    title="NEXRUM per WhatsApp kontaktieren"
  >
    <svg class="whatsapp-contact-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M20.52 3.48A11.87 11.87 0 0 0 12.04 0C5.44 0 .07 5.37.07 11.97c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.63a11.98 11.98 0 0 0 5.84 1.49h.01C18.64 23.86 24 18.49 24 11.9c0-3.2-1.24-6.19-3.48-8.42ZM12.05 21.84a9.91 9.91 0 0 1-5.05-1.38l-.36-.21-3.68.97.98-3.59-.23-.37a9.88 9.88 0 0 1-1.52-5.29c0-5.49 4.47-9.96 9.97-9.96a9.88 9.88 0 0 1 7.04 2.92 9.88 9.88 0 0 1 2.91 7.04c0 5.49-4.47 9.96-9.96 9.96Zm5.46-7.46c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.62.71.23 1.36.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  </a>
</template>

<style>
.whatsapp-contact {
  position: fixed;
  right: max(24px, env(safe-area-inset-right));
  bottom: max(24px, env(safe-area-inset-bottom));
  z-index: 50;
  display: grid;
  place-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: #fff;
  background: #128c46;
  border: 2px solid #fff;
  box-shadow: 0 6px 24px rgb(7 17 27 / 24%);
  text-decoration: none;
}
.whatsapp-contact-icon {
  width: 30px;
  height: 30px;
  animation: whatsapp-wiggle 5s ease-in-out infinite;
}
.whatsapp-contact:hover { background: #0d7037; }
.whatsapp-contact:focus-visible { outline: 3px solid #69bdeb; outline-offset: 4px; }
.whatsapp-contact:hover .whatsapp-contact-icon,
.whatsapp-contact:focus-visible .whatsapp-contact-icon { animation-play-state: paused; }
@keyframes whatsapp-wiggle {
  0%, 72%, 100% { transform: rotate(0); }
  76%, 84% { transform: rotate(-12deg); }
  80%, 88% { transform: rotate(12deg); }
  92% { transform: rotate(-5deg); }
  96% { transform: rotate(5deg); }
}
@media (max-width: 760px) {
  .whatsapp-contact { width: 54px; height: 54px; right: max(16px, env(safe-area-inset-right)); bottom: max(16px, env(safe-area-inset-bottom)); }
}
@media (prefers-reduced-motion: reduce) {
  .whatsapp-contact-icon { animation: none; }
}
</style>
