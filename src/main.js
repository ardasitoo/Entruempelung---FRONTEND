import { createApp, createSSRApp } from 'vue'
import { pages, seoHead } from './config/seo'
import './style.css'
import App from './App.vue'

const path = window.location.pathname.replace(/\/+$/, '') || '/'
// Keep metadata correct even when the host serves the SPA fallback for a deep link.
if (pages[path]) {
  const head = document.createElement('template')
  head.innerHTML = seoHead(path)
  document.head.querySelectorAll('[data-nexrum-seo]').forEach((element) => element.remove())
  document.head.append(head.content)
}
const app = document.querySelector('#app')
const create = app.hasChildNodes() ? createSSRApp : createApp
create(App, { path }).mount(app)
