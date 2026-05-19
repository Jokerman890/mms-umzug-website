import { motion } from "framer-motion";
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
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            className="trust-item"
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.42, delay: index * 0.06, ease: "easeOut" }}
          >
            <Icon aria-hidden="true" />
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </motion.div>
        );
      })}
    </section>
  );
}
