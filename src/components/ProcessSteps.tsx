import { CalendarCheck, CheckCircle2, ClipboardList, FileText, PhoneCall } from "lucide-react";

const steps = [
  {
    title: "Anfrage",
    text: "Kontaktieren Sie uns telefonisch, per WhatsApp oder über das Formular.",
    icon: PhoneCall,
  },
  {
    title: "Angebot",
    text: "Sie erhalten ein faires und unverbindliches Angebot nach Ihren Wünschen.",
    icon: FileText,
  },
  {
    title: "Termin",
    text: "Wir vereinbaren Ihren Wunschtermin und planen alle Details zuverlässig ein.",
    icon: CalendarCheck,
  },
  {
    title: "Durchführung",
    text: "Unser Team führt den Auftrag professionell, pünktlich und sorgfältig aus.",
    icon: ClipboardList,
  },
  {
    title: "Zufriedenheit",
    text: "Gemeinsam prüfen wir alles und Sie sind rundum zufrieden.",
    icon: CheckCircle2,
  },
];

export function ProcessSteps() {
  return (
    <section className="process-section" id="ablauf">
      <div className="container">
        <div className="section-heading center compact">
          <span>So läuft es ab</span>
          <h2>Unser Ablauf in 5 einfachen Schritten</h2>
        </div>
        <div className="process-grid">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article className="process-card" key={step.title}>
                <div className="step-number">{index + 1}</div>
                <Icon aria-hidden="true" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
