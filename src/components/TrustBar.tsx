import { CalendarDays, MapPin, ShieldCheck, UsersRound } from "lucide-react";

const items = [
  { icon: UsersRound, value: "500+", label: "zufriedene Kunden" },
  { icon: CalendarDays, value: "5+", label: "Jahre Erfahrung" },
  { icon: MapPin, value: "Bremen", label: "und Umgebung" },
  { icon: ShieldCheck, value: "100%", label: "Zuverlässigkeit" },
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
