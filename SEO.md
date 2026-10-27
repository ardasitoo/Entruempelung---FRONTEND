# SEO für NEXRUM

Die Hauptdomain ist https://nexrum-berlin.de. Seitentitel, Beschreibungen,
Canonical-URLs, Vorschaudaten und LocalBusiness-Daten stehen in `src/config/seo.js`.
Keine Bewertungen, Öffnungszeiten oder Standortangaben ergänzen, die nicht belegt sind.

`npm run build` baut das Vue-Frontend und erzeugt danach mit
`scripts/prerender.mjs` fertiges HTML für Startseite, Impressum, Datenschutz und
Admin-Login. Die Ausgabe in `dist` enthält sowohl einzelne HTML-Dateien als auch
Verzeichnis-Indizes, damit direkte Aufrufe auf statischem Hosting funktionieren.
Der Build ruft das Backend nicht auf und enthält keine Kundenanfragen.
Der Browser übernimmt das fertige HTML mit Vue-Hydration.

`public/robots.txt` verweist auf `public/sitemap.xml`. Die Sitemap enthält nur die
öffentlichen Seiten. `/admin` erhält `noindex, nofollow` im fertigen HTML;
robots.txt sperrt den Abruf nicht, damit Suchmaschinen diese Anweisung lesen können.
Die Authentifizierung für Kundendaten bleibt unabhängig davon erforderlich.

Nach dem Deployment prüfen:
- `/`, `/impressum`, `/datenschutz`, `/admin` direkt öffnen.
- `/admin` muss schon im HTML-Quelltext `noindex` enthalten.
- `/sitemap.xml` und `/robots.txt` müssen echte Dateien liefern, nicht die Startseite.
- Startseite im Google Rich Results Test und in der URL-Prüfung der Search Console prüfen.
- Domain-Property in Google Search Console per DNS-TXT bestätigen und `sitemap.xml` einreichen.

Die Search-Console-Verifizierung benötigt einen Kontozugang und den von Google
erzeugten TXT-Wert. Sie ist kein Bestandteil des Quellcodes. SEO garantiert keine
Indexierung oder bestimmte Position in den Suchergebnissen.
