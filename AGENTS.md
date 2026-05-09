# AGENTS.md - MMS Umzug Website

## Projektziel

Diese Codebase enthaelt die Website fuer MMS Umzug / MMS-Dienstleistung aus Bremen.

Ziel ist eine moderne, hochwertige, mobile-first Landingpage zur Lead-Generierung ueber Telefonanruf, WhatsApp-Anfrage, Angebotsformular und lokale SEO-Sichtbarkeit fuer Bremen und Umgebung.

Die Website soll vertrauenswuerdig, handwerklich-serioes, modern und hochwertig wirken. Kein generischer Template-Look.

## Firmeninformationen

Diese Daten muessen konsistent verwendet werden:

```txt
Firma: MMS Umzug / MMS-Dienstleistung
Ort: Bremen
Adresse: Burger Heerstr. 32, 28719 Bremen
Telefon: 0176 405 510 85
Telefon-Link: tel:+4917640551085
E-Mail: mms.umzug@web.de
E-Mail-Link: mailto:mms.umzug@web.de
Domain: www.mms-umzug.de
Website-URL: https://www.mms-umzug.de
WhatsApp-Link: https://wa.me/4917640551085?text=Hallo%20MMS%20Umzug%2C%20ich%20m%C3%B6chte%20ein%20unverbindliches%20Angebot%20anfragen.
```

## Leistungen

Die Seite muss diese Leistungen klar darstellen:

- Umzuege
- Entruempelung
- Abrissarbeiten
- Gartenarbeit
- Moebelmontage
- Moebelabbau und Aufbau
- Transport und Lieferung
- Haushaltsaufloesung
- Kleintransporte

## Grundprinzipien

Arbeite immer nach diesen Prioritaeten:

1. Mobile-first UX
2. Conversion vor Dekoration
3. Originalfahrzeug korrekt verwenden
4. schnelle Kontaktaufnahme ermoeglichen
5. klare lokale Positionierung fuer Bremen
6. Performance und saubere Umsetzung
7. hochwertige, aber nicht ueberladene Animationen
8. barrierearme Bedienbarkeit

## Designrichtung

- Heller, sauberer Landingpage-Aufbau mit Hero, Bremen-Hintergrund, Originalfahrzeug, CTA-Karten, Leistungen, Trust-Bar, Ablauf, Fuhrpark/Galerie, Warum-MMS, Kontakt, FAQ und Footer.
- Icon- und Effektstil: grosse runde Glassmorphism-Icon-Bubbles, gruener Glow, sichtbare Glaskanten, leichte Tiefenwirkung, dezente Floating-Animationen und weiche Hover-Effekte.
- Hauptfarben: MMS-Gruen, Navy/Dunkelblau, Weiss/Smoke/Grau-Blau; Orange aus dem Logo nur sparsam als Akzent.
- Hintergrund nie komplett weiss: sehr helles Grau-Blau, Smoke-Glass-Flaechen, dezente Verlaeufe und Bremen-Bild als dezenter Hero-Hintergrund.
- Kein Cyberpunk-, Gaming- oder generischer Template-Look.

## Originalfahrzeug-Regeln

Sehr wichtig:

- Verwende ausschliesslich echte Originalfahrzeuge aus bereitgestellten Assets.
- Kein KI-generiertes Ersatzfahrzeug.
- Keine erfundene Fahrzeugbeschriftung.
- Kein kuenstliches Umlabeln durch generative Bilder.
- Fahrzeug nicht verzerren, unlogisch abschneiden oder mit herausragenden Fragmenten darstellen.
- Die Originalbeschriftung muss sichtbar bleiben, insbesondere `www.mms-umzug.de`, `entruempelung`, `abrissarbeiten`, `gartenarbeit und noch weiter`, Telefonnummer, E-Mail und MMS-Logo/Beschriftung.

Empfohlene Asset-Struktur:

```txt
public/images/mms/
|- mms-logo.png
|- mms-fahrzeug-hero.jpg
|- mms-fahrzeug-front.jpg
|- mms-fahrzeug-heck.jpg
|- mms-fahrzeug-seite.jpg
|- mms-montage.jpg
`- bremen-background.jpg
```

Wenn Assets fehlen, keine Fake-Bilder erzeugen. Stattdessen fehlende Assets als offenen Punkt nennen.

## Mobile-first Regeln

- Header: Logo links, Call-Button rechts, Menue-Icon optional.
- Hero: kompakter Text, Fahrzeug, CTA-Karten.
- CTA-Karten: Anrufen, WhatsApp, Angebot.
- Leistungen: horizontaler Slider oder kompaktes 2-Spalten-Grid.
- Ablauf: vertikale Stepper-Karten.
- Galerie: horizontaler Snap-Slider.
- Kontakt: grosse klickbare Kontaktzeilen.
- Sticky Bottom Bar: immer sichtbar auf Mobile.
- Touch-Ziele mindestens 44px hoch.
- Kein horizontales Scrollen der ganzen Seite.
- Desktop darf nicht zu breit wirken, max. ca. 1180px.

## Seitenstruktur

1. Header mit Logo, Navigation, Call-Button und Mobile-Menue.
2. Hero mit Headline `MMS Umzug Bremen`, Subheadline, Beschreibung, CTA, Trust Pills, Bremen-Hintergrund und Originalfahrzeug.
3. Leistungen mit runden Icon-Bubbles und Karten fuer Umzuege, Entruempelung, Abrissarbeiten, Gartenarbeit, Moebelmontage und Transport.
4. Trust-Bar mit Schnell & zuverlaessig, Faire Preise, Persoenlicher Service, Bremen & Umgebung.
5. Ablauf in 5 Schritten: Anfrage, Angebot, Termin, Durchfuehrung, Zufriedenheit.
6. Fuhrpark/Galerie mit echten MMS-Bildern.
7. Warum MMS? mit Nutzenargumenten.
8. Kontakt/Anfrage mit Telefon, E-Mail, Website, Adresse und Formular.
9. FAQ.
10. Footer mit Logo, Kurzbeschreibung, Schnelllinks, Leistungen, Kontakt, Impressum, Datenschutz.

## Technik

Bevorzugt:

- React
- TypeScript
- Vite
- Tailwind CSS
- lucide-react fuer Icons
- framer-motion fuer gezielte Animationen

Keine unnoetigen Dependencies installieren. Bestehende Struktur respektieren, wenn vorhanden.

## Datenhaltung

Firmendaten nicht hart in jeder Komponente verteilen. Zentrale Daten in `src/data/company.ts`, Leistungen in `src/data/services.ts`, FAQ in `src/data/faq.ts`, Galerie in `src/data/gallery.ts`.

## Accessibility und SEO

- Semantisches HTML, echte Links/Buttons, sinnvolle `aria-labels`, sichtbare Focus-States und ausreichende Kontraste.
- Title: `MMS Umzug Bremen - Umzug, Entruempelung & Dienstleistungen`
- Meta Description: `MMS Umzug in Bremen: Umzuege, Entruempelung, Abrissarbeiten, Gartenarbeit, Moebelmontage und Transport. Jetzt unverbindlich anfragen.`
- JSON-LD als LocalBusiness/MovingCompany, wenn technisch passend.

## Build- und Test-Kommandos

Nach Aenderungen ausfuehren:

```bash
npm install
npm run build
```

Falls vorhanden:

```bash
npm run lint
npm test
```

Wenn Scripts nicht existieren, nicht erfinden und im Abschlussbericht nennen.

## Arbeitsweise fuer Codex

Vor Aenderungen Projektstruktur, `package.json`, Assets, Komponenten und Styling-Strategie pruefen.

Waehrend Aenderungen:

- kleine, nachvollziehbare Aenderungen
- bestehende Struktur respektieren
- keine unnoetigen Komplettumbauten
- keine fremden Assets ungefragt einbauen
- keine API-Keys oder Secrets anfassen
- keine generierten Fake-Fahrzeuge verwenden
- keine personenbezogenen Daten veraendern

Nach Aenderungen:

1. Build ausfuehren
2. Lint/Test ausfuehren, falls vorhanden
3. Fehler beheben
4. Versionierung pruefen und bei abgeschlossener Arbeit aktualisieren
5. Dokumentation/Changelog vervollstaendigen
6. geaenderte Dateien zusammenfassen
7. offene Punkte nennen

## PR- und Release-Regel

Wenn eine Arbeit abgeschlossen, committed, gepusht oder als PR vorbereitet wird:

- `package.json` Version pruefen und bei Bedarf erhoehen
- `src/data/version.ts` mit derselben Version synchron halten
- `CHANGELOG.md` aktualisieren
- `README.md` bei neuen Setup-, Deployment-, Asset- oder Bedienhinweisen aktualisieren
- Abschlussbericht mit Build/Lint/Test-Status ausgeben

## Externe Dokumentation / MCP

Wenn Informationen zu OpenAI, Codex, MCP, Responses API, Tools oder AGENTS.md gebraucht werden:

- MCP-Server `openaiDeveloperDocs` verwenden
- nicht auf veraltetes Gedaechtnis verlassen
- relevante Erkenntnisse kurz zusammenfassen
- konkret auf das Projekt anwenden

## Verbote

Nicht machen:

- kein Fake-Fahrzeug generieren
- keine falsche Fahrzeugbeschriftung
- keine erfundenen Bewertungen, Zertifikate, Partnerlogos oder Garantien
- keine unbestaetigten harten Aussagen wie `1000+ Kunden`
- kein ueberbreites Desktop-Layout
- keine komplett weisse Flaeche hinter Glas-Icons
- kein zu dunkles Cyberpunk-Design
- keine unnoetigen Popups
- keine schweren Animationen auf Mobile
- keine geheimen Tokens ausgeben
- keine Secrets in Code committen

## Gewuenschter Abschlussbericht

```txt
Erledigt:
- ...

Geaenderte Dateien:
- ...

Geprueft:
- npm run build: erfolgreich / Fehler
- npm run lint: erfolgreich / nicht vorhanden / Fehler
- npm test: erfolgreich / nicht vorhanden / Fehler

Offene Punkte:
- ...
```
