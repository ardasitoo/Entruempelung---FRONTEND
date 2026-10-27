import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { createServer } from 'vite'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { pages, seoHead } from '../src/config/seo.js'

// Generate crawlable HTML without calling the backend or including customer data.
const template = await readFile('dist/index.html', 'utf8')
const server = await createServer({ server: { middlewareMode: true, ws: false }, appType: 'custom' })
try {
  const { default: App } = await server.ssrLoadModule('/src/App.vue')
  for (const path of Object.keys(pages)) {
    const content = await renderToString(createSSRApp(App, { path }))
    const html = template
      .replace(/<!--seo-start-->[\s\S]*?<!--seo-end-->/, seoHead(path))
      .replace('<div id="app"></div>', `<div id="app" data-page="${path}">${content}</div>`)
    const directory = path === '/' ? 'dist' : `dist${path}`
    await mkdir(directory, { recursive: true })
    await writeFile(`${directory}/index.html`, html)
    // Clean URLs can resolve either flat HTML or a directory index, depending on the host.
    if (path !== '/') await writeFile(`dist${path}.html`, html)
    console.log(`Generated ${path}`)
  }
} finally {
  await server.close()
}
