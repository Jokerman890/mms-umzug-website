import { FormEvent, useState } from "react";
import { Globe2, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { company } from "../data/company";
import { allServices } from "../data/services";

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
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const newErrors: FormErrors = {};
    if (!name) newErrors.name = "Bitte geben Sie Ihren Namen ein.";
    if (!phone) newErrors.phone = "Bitte geben Sie Ihre Telefonnummer ein.";
    if (email && !validateEmail(email)) newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    if (!service) newErrors.service = "Bitte wählen Sie eine Leistung aus.";
    if (!message) newErrors.message = "Bitte geben Sie eine Nachricht ein.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      if (res.ok) {
        setSent(true);
        form.reset();
      } else {
        setErrors({ message: "Fehler beim Senden. Bitte versuchen Sie es später erneut oder rufen Sie uns an." });
      }
    } catch {
      setErrors({ message: "Fehler beim Senden. Bitte versuchen Sie es später erneut oder rufen Sie uns an." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="contact-card" id="kontakt">
      <div className="section-heading">
        <span>Kontaktieren Sie uns</span>
        <h2>Wir sind für Sie da!</h2>
        <p>Direkt anrufen, per WhatsApp schreiben oder das Formular ausfüllen – wir melden uns umgehend.</p>
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
      {sent ? (
        <p className="form-status success">
          Vielen Dank für Ihre Anfrage! Wir melden uns so schnell wie möglich bei Ihnen.
        </p>
      ) : (
        <form className="quote-form" onSubmit={handleSubmit} noValidate>
          <input type="hidden" name="access_key" value="529d7bf3-12ae-40dc-8185-4e144496e12f" />
          <input type="hidden" name="subject" value={`Anfrage über ${company.domain}`} />
          <input type="hidden" name="from_name" value="MMS Umzug Website" />
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
              <option value="" disabled>Bitte auswählen</option>
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
          <button type="submit" disabled={submitting}>
            <Send aria-hidden="true" />
            {submitting ? "Wird gesendet..." : "Jetzt unverbindlich anfragen"}
          </button>
          {errors.message && typeof errors.message === "string" && !errors.name && !errors.phone && !errors.email && !errors.service && (
            <span className="error-message">{errors.message}</span>
          )}
        </form>
      )}
    </section>
  );
}
