import { FormEvent, useState } from "react";
import { Globe2, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { company } from "../data/company";
import { allServices } from "../data/services";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const email = String(formData.get("email") || "");
    const service = String(formData.get("service") || "");
    const message = String(formData.get("message") || "");
    const body = [
      `Name: ${name}`,
      `Telefon: ${phone}`,
      email ? `E-Mail: ${email}` : "",
      `Leistung: ${service}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `${company.emailHref}?subject=${encodeURIComponent(
      `Anfrage über ${company.domain}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section className="contact-card" id="kontakt">
      <div className="section-heading">
        <span>Kontaktieren Sie uns</span>
        <h2>Wir sind für Sie da!</h2>
        <p>Direkt anrufen, per WhatsApp schreiben oder das Formular als E-Mail vorbereiten.</p>
      </div>
      <div className="contact-lines">
        <a href={company.phoneHref}>
          <Phone aria-hidden="true" />
          {company.phone}
        </a>
        <a href={company.whatsappHref}>
          <MessageCircle aria-hidden="true" />
          WhatsApp-Anfrage senden
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
          Anfrage per E-Mail vorbereiten
        </button>
        {sent ? <p className="form-status">Ihr E-Mail-Programm wurde mit der Anfrage vorbereitet.</p> : null}
      </form>
    </section>
  );
}
