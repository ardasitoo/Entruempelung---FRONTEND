# Entruempelung---FRONTEND

Frontend der Webanwendung für ein Entrümpelungsunternehmen.

## Projektbeschreibung

Die Website dient als digitale Anlaufstelle für Kunden, die eine Entrümpelung oder verwandte Dienstleistung benötigen.

Besucher sollen sich über die angebotenen Leistungen informieren und unkompliziert eine Anfrage stellen können.

## Geplante Funktionen

- Startseite
- Übersicht der Leistungen
- Informationen zum Unternehmen
- Kontaktmöglichkeiten
- Anfrageformular für Entrümpelungen
- Responsive Darstellung für Smartphone, Tablet und Desktop
- Verbindung mit dem Backend

## Technologien

- Vue
- Vite
- JavaScript
- CSS

## Projektstatus

Das Projekt befindet sich aktuell in der Entwicklung.

### Aktueller Stand

- [x] GitHub-Repository erstellt
- [x] Frontend-Projekt einrichten
- [x] Grundlegendes Layout erstellen
- [x] Navigation erstellen
- [x] Startseite erstellen
- [x] Leistungsseiten erstellen
- [ ] Anfrageformular erstellen
- [x] Backend anbinden

## Lokal starten

```bash
npm install
npm run dev
```

Die Anwendung laeuft danach standardmaessig unter:

```text
http://localhost:5173
```

## Backend verbinden

Lokal kann eine `.env`-Datei auf Basis von `.env.example` angelegt werden:

```text
VITE_API_BASE_URL=http://localhost:8080
```

Auf Render muss diese Environment Variable auf die Backend-URL zeigen:

```text
VITE_API_BASE_URL=https://dein-backend.onrender.com
```

## Render Deployment

Service-Typ:

```text
Static Site
```

Build Command:

```bash
npm install && npm run build
```

Publish Directory:

```text
dist
```
