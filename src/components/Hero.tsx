import { ClipboardList, MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { assetPaths, company } from "../data/company";
import { AssetImage } from "./AssetImage";

const trustPills = ["Schnell & zuverlässig", "Faire Preise", "Persönlicher Service", "Bremen & Umgebung"];

export function Hero() {
  return (
    <section className="hero" id="start" style={{ "--hero-bg-image": `url("${assetPaths.bremen}")` } as CSSProperties}>
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-motion-field" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="container hero-inner">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <h1 aria-label="MMS Umzug Bremen - Umzug, Entrümpelung & Dienstleistungen aus einer Hand">
            <span className="hero-title-brand">
              <AssetImage src={assetPaths.logoWordmark} alt="MMS" fallbackLabel="MMS" className="hero-title-logo" />
              <span>Umzug</span>
            </span>{" "}
            Bremen -
            <br />
            Umzug, Entrümpelung & Dienstleistungen aus einer Hand
          </h1>
          <p>
            Zuverlässige Unterstützung bei Umzügen, Entrümpelungen, Abrissarbeiten, Gartenarbeiten,
            Möbelmontage und Transporten in Bremen und Umgebung.
          </p>
          <div className="hero-actions" aria-label="Kontaktmöglichkeiten">
            <a className="action-card primary" href={company.phoneHref} aria-label="MMS Umzug jetzt anrufen">
              <Phone aria-hidden="true" />
              <strong>Anrufen</strong>
              <small>{company.phone}</small>
            </a>
            <a className="action-card" href={company.whatsappHref} aria-label="MMS Umzug per WhatsApp schreiben">
              <MessageCircle aria-hidden="true" />
              <strong>WhatsApp</strong>
              <small>schreiben</small>
            </a>
            <a className="action-card" href="#kontakt" aria-label="Angebot bei MMS Umzug anfragen">
              <ClipboardList aria-hidden="true" />
              <strong>Angebot</strong>
              <small>anfragen</small>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-vehicle-wrap"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
        >
          <AssetImage
            src={assetPaths.heroVehicle}
            alt="Originalfahrzeug von MMS Umzug mit sichtbarer Beschriftung"
            fallbackLabel="Originalfahrzeug unter public/images/mms/mms-fahrzeug-hero.jpg einfügen"
            className="hero-vehicle"
            loading="eager"
          />
        </motion.div>

        <div className="hero-trust" aria-label="Vorteile">
          {trustPills.map((pill) => (
            <span key={pill}>{pill}</span>
          ))}
        </div>
        <div className="scroll-cue" aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  );
}
