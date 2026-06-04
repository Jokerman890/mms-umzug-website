# Changelog

Alle relevanten Aenderungen an der MMS Umzug Website werden hier dokumentiert.

## 1.2.2 - 2026-06-04

- Hero-Design nach UI-Review verfeinert: ruhigere Typografie, kompaktere Servicevisualisierung und klarere Fahrzeugflaeche.
- Parallax-Video stark gedaempft, damit es nur noch als dezente Hintergrundtiefe wirkt und nicht vom Angebot ablenkt.
- Desktop-Komposition ausgeglichener gestaltet: weniger uebergrosse Headline, bessere Balance zwischen Text, Karte, CTAs und Originalfahrzeug.

## 1.2.1 - 2026-06-04

- Hero-Hintergrund um ein dezentes Parallax-Video aus dem bestehenden Bremen-Motiv erweitert.
- MP4- und WebM-Varianten fuer breite Browserunterstuetzung erzeugt.
- Statisches Bremen-Bild bleibt als Poster/Fallback erhalten; bei `prefers-reduced-motion` wird das Video ausgeblendet.

## 1.2.0 - 2026-06-04

- Neue Liquid-Glass-Version der Landingpage gestaltet: hellere Grundstimmung, staerkere Glasflaechen, Lichtkanten und gruenen MMS-Glow.
- Hero um eine interaktive Bremen-Servicevisualisierung mit 10/20/30-km-Ringen, Service-Bubbles und Schnellkontakt-CTAs erweitert.
- Originalfahrzeug weiterhin ausschliesslich aus bereitgestellten MMS-Assets eingebunden und als echte Bildflaeche in das neue Glaslayout integriert.
- Mobile Darstellung fuer die Visualisierung optimiert: Hauptkarte zuerst, Touch-CTAs direkt danach und reduzierte Service-Dichte auf kleinen Viewports.
- Bestehende Formulare, Firmendaten, Leistungen, Galerie und SEO-Struktur beibehalten.

## 1.1.4 - 2026-05-31

- Neue bereitgestellte Einsatzbilder fuer Fahrzeug, Abrissarbeit, Gartenarbeit und Montage eingebunden.
- Hero-Fahrzeug auf das neue Originalfoto mit sichtbarer MMS-Beschriftung umgestellt.
- Galerie-Reihenfolge und Bildausschnitte fuer die neuen Motive angepasst.
- JPG/WebP-Varianten der neuen Bilder optimiert.

## 1.1.3 - 2026-05-31

- Neue bereitgestellte Originalbilder fuer Fahrzeug-Collage und Montage-/Einsatzmotiv eingebunden.
- Logo-Quelle aus der sauberen MMS-Datei erneuert; Website-Logo bleibt transparent in gruen/orange.
- WebP-Varianten und PNG-Logo-Fallbacks neu optimiert.
- Cache-Busting fuer Logo-Assets aktualisiert und sichtbare Umlautfehler in Navigation/Galerie korrigiert.

## 1.1.2 - 2026-05-31

- YouWare-inspirierter Boost angewendet: klarere Hero-Hierarchie, staerkere Anfragefuehrung und bessere Service-CTAs.
- Hero um konkrete Anfragevorteile fuer Telefon, WhatsApp-Fotos und lokalen Bremen-Service ergaenzt.
- Kontaktbereich mit priorisiertem Schnellkontakt-Hinweis, besseren Formular-Placeholders und klarerer Anfragecopy geschaerft.
- Leistungen und FAQ textlich lokaler und conversion-orientierter formuliert, ohne unbestaetigte Claims oder Fake-Bewertungen.

## 1.1.1 - 2026-05-24

- Sitemap.xml und robots.txt erstellt.
- Open Graph + Twitter Card Tags in index.html ergaenzt.

## 1.1.0 - 2026-05-24

- Kontaktformular mit Web3Forms-Integration versehen (echtes Backend-Submit).
- phoneHref korrigiert: tel:+4917640551085 -> +4917640551085.
- Alle Bilder auf WebP optimiert (45-92% kleiner), jpg als Fallback erhalten.
- AssetImage mit automatischem WebP->JPG Fallback erweitert.
- Impressum-, Datenschutz- und 404-Seiten erstellt.
- Footer-Links auf echte Impressum/Datenschutz-Seiten umgestellt.
- Lighthouse-Audit durchgefuehrt (90/100 Performance, 100/100 Rest).

## 1.0.7 - 2026-05-19

- Website mit konsistenten Motion-Reveals fuer Trust-Bar, Ablauf, Galerie, Warum-MMS und FAQ aufgewertet.
- Hero mit dezenten Glas-Floating-Elementen, animiertem Bremen-Hintergrund, Scroll-Hinweis und Logo-Glow verfeinert.
- CTA-, Service-, Galerie-, Formular- und Kontakt-Interaktionen mit Hover-/Focus-Feedback und gruenem Glow verbessert.
- Bewegungen respektieren `prefers-reduced-motion`, damit die Seite barrierearm bedienbar bleibt.

## 1.0.6 - 2026-05-19

- Hero-Headline nutzt die MMS-Wortmarke aus dem Logo statt reinem Text fuer `MMS`.
- Vollstaendiges Header/Footer-Logo bleibt inklusive kleinem `UMZUG` erhalten.
- Logo-Assets mit Cache-Busting versehen, damit die gruen/orange SVG-Version sicher neu geladen wird.
- README um die neue Hero-Wortmarke und Logo-Verwendung ergaenzt.

## 1.0.5 - 2026-05-19

- Kaputte Umlaute in sichtbaren Texten, Meta-Daten und JSON-LD repariert.
- Unbestaetigte Trust-Zahlen durch qualitative Vertrauensmerkmale ersetzt.
- Alle Leistungen als klickbare Service-Tags im Leistungsbereich sichtbar gemacht.
- Kontaktbereich mit WhatsApp-Zeile, groesseren Kontaktflaechen und echter E-Mail-Vorbereitung verbessert.
- Hintergrund und Kontakt-/Service-Details visuell heller und conversion-freundlicher abgestimmt.
- Logo-Blau auf MMS-Gruen umgestellt, Orange beibehalten und Header/Footer-Logo transparent ohne weisse Kapsel dargestellt.

## 1.0.4 - 2026-05-10

- `npm test` mit Vitest, jsdom und Testing Library eingerichtet.
- Smoke-Tests fuer Landingpage-CTAs, Kontaktformular, JSON-LD, zentrale Firmendaten, Services und Public-Asset-Aufloesung ergaenzt.
- README um Testkommandos und Teststrategie aktualisiert.

## 1.0.3 - 2026-05-10

- Helles, seitenweites Bremen-Parallax-Hintergrundbild ergaenzt.
- Seitenhintergrund mit Fixed-Parallax auf Desktop und statischem Verhalten auf Mobile eingebunden.
- Unnoetige Paket-Dependencies `npm` und `run` aus dem Projekt bereinigt.
- Dokumentation fuer das neue Parallax-Asset aktualisiert.

## 1.0.2 - 2026-05-09

- Neues helleres Bremen-Parallax-Hintergrundbild erstellt und eingebunden.
- Hero-Overlay aufgehellt, damit das Bremen-Motiv sichtbarer wirkt.
- Versionierung fuer den abgeschlossenen Hintergrundbild-Feinschliff aktualisiert.

## 1.0.1 - 2026-05-09

- GitHub Pages Workflow auf Node 24 vorbereitet.
- Actions-Umgebung fuer kommende GitHub Node-24-Umstellung aktualisiert.
- Dokumentation und sichtbare Versionsanzeige synchronisiert.

## 1.0.0 - 2026-05-09

- Initiale React/Vite/Tailwind Website erstellt.
- Mobile-first Landingpage mit Header, Hero, Leistungen, Trust-Bar, Ablauf, Fuhrpark/Galerie, Warum-MMS, Kontakt, FAQ, Footer und Sticky Mobile CTA umgesetzt.
- Originale MMS-Fahrzeugbilder und Logo-Web-Pack eingebunden.
- SEO-Metadaten und JSON-LD fuer `MovingCompany` integriert.
- GitHub Pages Deployment via GitHub Actions vorbereitet.
- Projektweite `AGENTS.md` fuer Codex-Arbeitsregeln angelegt.
