import { Phone, Mail, MapPin } from "lucide-react";
import { assetPaths, company, navItems } from "../data/company";
import { allServices } from "../data/services";
import { appVersion } from "../data/version";
import { AssetImage } from "./AssetImage";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a className="brand footer-brand" href="#start" aria-label="MMS Umzug Startseite">
            <AssetImage src={assetPaths.logoMark} alt="MMS Logo" fallbackLabel="MMS" className="brand-logo-mark" />
            <span className="brand-word">Umzug</span>
          </a>
          <p>Ihr zuverlässiger Partner für Umzüge, Entrümpelungen und Dienstleistungen in Bremen und Umgebung.</p>
        </div>
        <div>
          <h2>Schnelllinks</h2>
          {navItems.slice(0, 5).map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div>
          <h2>Leistungen</h2>
          {allServices.slice(0, 6).map((service) => (
            <a key={service} href="#leistungen">
              {service}
            </a>
          ))}
        </div>
        <div>
          <h2>Kontakt</h2>
          <a href={company.phoneHref}>
            <Phone aria-hidden="true" />
            {company.phone}
          </a>
          <a href={company.emailHref}>
            <Mail aria-hidden="true" />
            {company.email}
          </a>
          <span>
            <MapPin aria-hidden="true" />
            {company.address}
          </span>
        </div>
      </div>
      <div className="container footer-bottom">
        <small>© 2026 MMS Umzug - Alle Rechte vorbehalten. Version {appVersion}</small>
        <span>
          <a href="#kontakt">Impressum</a>
          <a href="#kontakt">Datenschutz</a>
        </span>
      </div>
    </footer>
  );
}
