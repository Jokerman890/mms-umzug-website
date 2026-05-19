import { CalendarDays, HandCoins, MapPin, ShieldCheck } from "lucide-react";

const items = [
  { icon: CalendarDays, value: "Schnell", label: "Termin abstimmen" },
  { icon: HandCoins, value: "Fair", label: "transparent anfragen" },
  { icon: MapPin, value: "Bremen", label: "und Umgebung" },
  { icon: ShieldCheck, value: "Sorgfältig", label: "sauber ausgeführt" },
];

export function TrustBar() {
  return (
    <section className="container trust-bar" aria-label="Vertrauensmerkmale">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div className="trust-item" key={item.label}>
            <Icon aria-hidden="true" />
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        );
      })}
    </section>
  );
}
