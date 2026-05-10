# MMS Umzug Website

Moderne, mobile-first Landingpage fuer **MMS Umzug / MMS-Dienstleistung** aus Bremen.

Die Website ist auf schnelle Lead-Generierung ausgelegt: Telefonanruf, WhatsApp-Anfrage, Angebotsformular und lokale SEO-Sichtbarkeit fuer Bremen und Umgebung.

## Projektstatus

- Version: `1.0.3`
- Deployment-Ziel: `https://jokerman890.github.io/mms-umzug-website/`
- Framework: React + TypeScript + Vite
- Styling: Tailwind CSS plus projektweites CSS in `src/styles/globals.css`
- Deployment: GitHub Pages via GitHub Actions

## Features

- Hero mit Bremen-Parallax-Hintergrund, Originalfahrzeug und drei Conversion-CTAs
- Mobile Sticky CTA fuer Telefon, WhatsApp und Angebotsformular
- Leistungsbereich mit Glassmorphism-Karten und runden Glow-Icons
- Trust-Bar, Ablauf in 5 Schritten, Fuhrpark/Galerie, Warum-MMS-Bereich
- Kontaktformular mit Frontend-Validierung und spaeter erweiterbarem Backend-Platzhalter
- FAQ, Footer, Impressum-/Datenschutz-Links als Platzhalteranker
- SEO-Metadaten und JSON-LD `MovingCompany`
- Originale MMS-Fahrzeugbilder, Logo-Web-Pack und Favicons

## Projektstruktur

```txt
.
|- .github/workflows/deploy.yml
|- public/
|  |- favicon.ico
|  |- favicon.png
|  |- apple-touch-icon.png
|  |- android-chrome-192x192.png
|  |- android-chrome-512x512.png
|  `- images/mms/
|- src/
|  |- components/
|  |- data/
|  |- lib/
|  `- styles/
|- AGENTS.md
|- CHANGELOG.md
|- package.json
|- vite.config.ts
`- README.md
```

## Wichtige Datenquellen

- Firmendaten: `src/data/company.ts`
- Leistungen: `src/data/services.ts`
- FAQ: `src/data/faq.ts`
- Galerie: `src/data/gallery.ts`
- Version: `src/data/version.ts`
- Public-Asset-Helfer: `src/data/assets.ts`

## Assets

Die Website nutzt Assets aus `public/images/mms/`.

Wichtige Dateien:

- `mms-logo.svg`: Logo aus dem Web-Pack fuer Header/Footer
- `mms-logo.png`: PNG-Fallback/Asset-Variante
- `mms-logo-white.svg` und `mms-logo-white.png`: helle Varianten
- `mms-fahrzeug-hero.jpg`: Hero-Fahrzeugbild
- `mms-fahrzeug-front.jpg`, `mms-fahrzeug-heck.jpg`, `mms-fahrzeug-seite.jpg`: Galerieansichten
- `mms-fahrzeug-collage.jpg`: vollstaendige Fahrzeug-Collage
- `mms-montage.jpg`: Montage-/Einsatzbild
- `bremen-background.jpg`: Hero-Parallax-Hintergrund
- `bremen-page-parallax.png`: helles seitenweites Bremen-Parallax-Bild fuer den gesamten Seitenhintergrund

Wichtig: Fahrzeugbilder duerfen nicht generativ ersetzt, kuenstlich umbeschriftet oder verzerrt werden.

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Die lokale App laeuft standardmaessig ueber Vite.

## Checks

```bash
npm run build
npm run lint
```

Ein `npm test` Script ist aktuell nicht vorhanden.

## GitHub Pages Deployment

Das Deployment laeuft ueber `.github/workflows/deploy.yml`.

Trigger:

- Push auf `main`
- manueller `workflow_dispatch`

Pipeline:

1. Checkout
2. Node 20 einrichten
3. `npm ci`
4. `npm run build`
5. `dist` als Pages Artifact hochladen
6. GitHub Pages deployen

Vite ist mit `base: "/mms-umzug-website/"` konfiguriert. Public Assets werden ueber `import.meta.env.BASE_URL` aufgeloest.

## SEO

Gesetzt in `index.html` und `src/App.tsx`:

- Title: `MMS Umzug Bremen - Umzug, Entrümpelung & Dienstleistungen`
- Meta Description fuer Umzug, Entruempelung, Abrissarbeiten, Gartenarbeit, Moebelmontage und Transport
- Canonical URL: `https://www.mms-umzug.de`
- JSON-LD als `MovingCompany`

## Versionierung und Abschlussregel

Vor jedem abgeschlossenen PR/Release:

1. `package.json` Version pruefen/anpassen
2. `src/data/version.ts` synchron halten
3. `CHANGELOG.md` aktualisieren
4. `README.md` aktualisieren, falls Setup, Deployment, Assets oder Nutzung betroffen sind
5. `npm run build` und `npm run lint` ausfuehren

## Aktuelle Kontaktinfos

```txt
Firma: MMS Umzug / MMS-Dienstleistung
Adresse: Burger Heerstr. 32, 28719 Bremen
Telefon: 0176 405 510 85
E-Mail: mms.umzug@web.de
Website: https://www.mms-umzug.de
```
