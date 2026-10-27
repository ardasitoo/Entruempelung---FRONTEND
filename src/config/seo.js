export const siteUrl = 'https://nexrum-berlin.de'
export const pages = {
  '/': {
    title: 'Entrümpelung & Umzüge in Berlin | NEXRUM',
    description: 'NEXRUM in Berlin: Entrümpelung, Wohnungsauflösung, Umzüge und Entsorgung. Einfache Streicharbeiten zur Übergabe auf Wunsch. Jetzt unverbindlich anfragen.',
    robots: 'index, follow, max-image-preview:large',
  },
  '/impressum': {
    title: 'Impressum | NEXRUM Berlin',
    description: 'Impressum und Kontaktdaten von NEXRUM, Inhaber Simar Keskinoglu in Berlin.',
    robots: 'index, follow',
  },
  '/datenschutz': {
    title: 'Datenschutzerklärung | NEXRUM Berlin',
    description: 'Informationen zum Datenschutz bei NEXRUM: Kontaktformular, Verarbeitung von Anfragen, Speicherdauer und Ihre Rechte.',
    robots: 'index, follow',
  },
  '/admin': {
    title: 'Admin – Kundenanfragen | NEXRUM',
    description: 'Geschützter Verwaltungsbereich von NEXRUM.',
    robots: 'noindex, nofollow',
  },
}

export const businessData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteUrl}/#unternehmen`,
  name: 'NEXRUM',
  url: `${siteUrl}/`,
  description: pages['/'].description,
  telephone: '+4915170162872',
  email: 'info.entruempelungen@web.de',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Wilhelmsruher Damm 133',
    postalCode: '13439',
    addressLocality: 'Berlin',
    addressCountry: 'DE',
  },
  areaServed: { '@type': 'City', name: 'Berlin' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Leistungen von NEXRUM in Berlin',
    itemListElement: ['Entrümpelung', 'Wohnungsauflösung', 'Kellerentrümpelung', 'Garagenentrümpelung', 'Sperrmüll und Entsorgung', 'Umzüge', 'Einfache Streicharbeiten zur Übergabe'].map((name) => ({
      '@type': 'Offer', itemOffered: { '@type': 'Service', name, areaServed: { '@type': 'City', name: 'Berlin' } },
    })),
  },
}

const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

export function seoHead(path) {
  const page = pages[path]
  const url = `${siteUrl}${path === '/' ? '/' : path}`
  return `<title>${escapeHtml(page.title)}</title>
    <meta name="description" content="${escapeHtml(page.description)}" />
    <meta name="robots" content="${page.robots}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="NEXRUM" />
    <meta property="og:locale" content="de_DE" />
    <meta property="og:title" content="${escapeHtml(page.title)}" />
    <meta property="og:description" content="${escapeHtml(page.description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${siteUrl}/images/entruempelung-hero.jpg" />
    <meta property="og:image:alt" content="Reinigung eines hellen Raums" />
    <meta name="twitter:card" content="summary_large_image" />
    ${path === '/' ? `<script type="application/ld+json">${JSON.stringify(businessData).replaceAll('<', '\\u003c')}</script>` : ''}`.replace(/<(title|meta|link|script)\b/g, '<$1 data-nexrum-seo')
}
