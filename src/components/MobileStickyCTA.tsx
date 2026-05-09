import { MessageCircle, Phone, Send } from "lucide-react";
import { company } from "../data/company";

export function MobileStickyCTA() {
  return (
    <div className="mobile-sticky-cta" aria-label="Schnelle Kontaktleiste">
      <a href={company.phoneHref} aria-label="Anrufen">
        <Phone aria-hidden="true" />
        Anrufen
      </a>
      <a href={company.whatsappHref} aria-label="WhatsApp schreiben">
        <MessageCircle aria-hidden="true" />
        WhatsApp
      </a>
      <a href="#kontakt" aria-label="Angebot anfragen">
        <Send aria-hidden="true" />
        Angebot
      </a>
    </div>
  );
}
