import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { publicAsset } from "../data/assets";
import { AssetImage } from "./AssetImage";

const bullets = [
  "Persönlicher Ansprechpartner",
  "Schnelle Terminvergabe",
  "Transparente & faire Preise",
  "Sorgfältiger Umgang mit Ihrem Eigentum",
  "Kurzfristige Einsätze möglich",
];

export function WhyUs() {
  return (
    <motion.section
      className="why-card"
      id="warum"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.48, ease: "easeOut" }}
    >
      <div>
        <span>Warum MMS Umzug?</span>
        <h2>
          Zuverlässigkeit, auf die Sie sich <em>verlassen können</em>
        </h2>
        <p>Wir arbeiten schnell, sauber und kundenorientiert. Ihre Zufriedenheit steht für uns an erster Stelle.</p>
        <ul>
          {bullets.map((bullet, index) => (
            <motion.li
              key={bullet}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.32, delay: index * 0.05, ease: "easeOut" }}
            >
              <CheckCircle2 aria-hidden="true" />
              {bullet}
            </motion.li>
          ))}
        </ul>
      </div>
      <AssetImage
        src={publicAsset("images/mms/mms-montage.jpg")}
        alt="MMS Umzug bei Möbeltransport und Montage"
        fallbackLabel="Montagebild fehlt"
        className="why-image"
      />
    </motion.section>
  );
}
