import { ArrowRight, ClipboardList, MapPin, MessageCircle, Phone, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { company } from "../data/company";
import { services } from "../data/services";

const rings = [
  { label: "10 km", size: 34 },
  { label: "20 km", size: 56 },
  { label: "30 km", size: 78 },
];

const districts = ["Bremen-Nord", "Walle", "Findorff", "Hemelingen", "Neustadt"];

export function ServiceAreaVisualizer() {
  return (
    <motion.aside
      className="service-visualizer"
      aria-label="Einsatzgebiet und Anfragewege fuer MMS Umzug Bremen"
      initial={{ opacity: 0, y: 22, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
    >
      <div className="visualizer-map-card">
        <div className="visualizer-topline">
          <span>
            <MapPin aria-hidden="true" />
            Bremen & Umgebung
          </span>
          <small>Einsatzgebiet nach Anfrage</small>
        </div>

        <div className="visualizer-map" aria-hidden="true">
          <div className="map-rings">
            {rings.map((ring) => (
              <span
                className="map-ring"
                key={ring.label}
                style={{ "--ring-size": `${ring.size}%` } as CSSProperties}
              >
                <em>{ring.label}</em>
              </span>
            ))}
            <strong className="map-pin">
              <MapPin aria-hidden="true" />
              Bremen
            </strong>
          </div>
          {districts.map((district, index) => (
            <span className={`district-label district-label-${index + 1}`} key={district}>
              {district}
            </span>
          ))}
        </div>

        <div className="visualizer-services" aria-label="Leistungen">
          {services.slice(0, 6).map((service, index) => {
            const Icon = service.icon;
            return (
              <a className={`visualizer-service visualizer-service-${index + 1}`} href="#kontakt" key={service.title}>
                <Icon aria-hidden="true" />
                <span>{service.title}</span>
              </a>
            );
          })}
        </div>
      </div>

      <div className="visualizer-cta-grid" aria-label="Schnellkontakt">
        <a className="visualizer-cta primary" href={company.phoneHref}>
          <Phone aria-hidden="true" />
          <strong>Anrufen</strong>
          <span>{company.phone}</span>
        </a>
        <a className="visualizer-cta" href={company.whatsappHref}>
          <MessageCircle aria-hidden="true" />
          <strong>WhatsApp</strong>
          <span>Fotos senden</span>
        </a>
        <a className="visualizer-cta accent" href="#kontakt">
          <ClipboardList aria-hidden="true" />
          <strong>Angebot</strong>
          <span>anfragen</span>
        </a>
      </div>

      <div className="visualizer-note">
        <Sparkles aria-hidden="true" />
        <span>Leistungen, Umfang und Termin werden persoenlich abgestimmt.</span>
        <ArrowRight aria-hidden="true" />
      </div>
    </motion.aside>
  );
}
