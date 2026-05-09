import { FormEvent, useState } from "react";
import { Globe2, Mail, MapPin, Phone, Send } from "lucide-react";
import { company } from "../data/company";
import { allServices } from "../data/services";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className="contact-card" id="kontakt">
      <div className="section-heading">
        <span>Kontaktieren Sie uns</span>
        <h2>Wir sind für Sie da!</h2>
      </div>
      <div className="contact-lines">
        <a href={company.phoneHref}>
          <Phone aria-hidden="true" />
          {company.phone}
        </a>
        <a href={company.emailHref}>
          <Mail aria-hidden="true" />
          {company.email}
        </a>
        <a href={company.url}>
          <Globe2 aria-hidden="true" />
          {company.domain}
        </a>
        <span>
          <MapPin aria-hidden="true" />
          {company.address}
        </span>
      </div>
      <form className="quote-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Telefon
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label>
          E-Mail optional
          <input name="email" type="email" autoComplete="email" />
        </label>
        <label>
          Leistung auswählen
          <select name="service" defaultValue="" required>
            <option value="" disabled>
              Bitte auswählen
            </option>
            {allServices.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </label>
        <label className="full">
          Nachricht
          <textarea name="message" rows={4} required />
        </label>
        <button type="submit">
          <Send aria-hidden="true" />
          Jetzt unverbindlich anfragen
        </button>
        {sent ? <p className="form-status">Danke. Die Backend-Integration kann hier später angeschlossen werden.</p> : null}
      </form>
    </section>
  );
}
