import { FormEvent, useState } from "react";
import { Globe2, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { company } from "../data/company";
import { allServices } from "../data/services";
import { buildInquiryMailto } from "../lib/mailto";

type FormErrors = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
};

function validateEmail(email: string): boolean {
  if (!email) return true;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [mailtoHref, setMailtoHref] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const newErrors: FormErrors = {};

    if (!name) {
      newErrors.name = "Bitte geben Sie Ihren Namen ein.";
    }
    if (!phone) {
      newErrors.phone = "Bitte geben Sie Ihre Telefonnummer ein.";
    }
    if (email && !validateEmail(email)) {
      newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    }
    if (!service) {
      newErrors.service = "Bitte wählen Sie eine Leistung aus.";
    }
    if (!message) {
      newErrors.message = "Bitte geben Sie eine Nachricht ein.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setMailtoHref(buildInquiryMailto({ name, phone, email, service, message }));
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
      <form className="quote-form" onSubmit={handleSubmit} noValidate>
        <label>
          Name
          <input name="name" autoComplete="name" required className={errors.name ? "error" : ""} />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </label>
        <label>
          Telefon
          <input name="phone" type="tel" autoComplete="tel" required className={errors.phone ? "error" : ""} />
          {errors.phone && <span className="error-message">{errors.phone}</span>}
        </label>
        <label>
          E-Mail optional
          <input name="email" type="email" autoComplete="email" className={errors.email ? "error" : ""} />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </label>
        <label>
          Leistung auswählen
          <select name="service" defaultValue="" required className={errors.service ? "error" : ""}>
            <option value="" disabled>
              Bitte auswählen
            </option>
            {allServices.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
          {errors.service && <span className="error-message">{errors.service}</span>}
        </label>
        <label className="full">
          Nachricht
          <textarea name="message" rows={4} required className={errors.message ? "error" : ""} />
          {errors.message && <span className="error-message">{errors.message}</span>}
        </label>
        <button type="submit">
          <Send aria-hidden="true" />
          Anfrage per E-Mail vorbereiten
        </button>
        {sent && mailtoHref ? (
          <p className="form-status">
            Ihre Anfrage ist vorbereitet.{" "}
            <a className="form-mail-link" href={mailtoHref}>
              E-Mail öffnen
            </a>
          </p>
        ) : null}
      </form>
    </section>
  );
}
