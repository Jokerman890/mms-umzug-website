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
    <section className="why-card" id="warum">
      <div>
        <span>Warum MMS Umzug?</span>
        <h2>
          Zuverlässigkeit, auf die Sie sich <em>verlassen können</em>
        </h2>
        <p>Wir arbeiten schnell, sauber und kundenorientiert. Ihre Zufriedenheit steht für uns an erster Stelle.</p>
        <ul>
          {bullets.map((bullet) => (
            <li key={bullet}>
              <CheckCircle2 aria-hidden="true" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
      <AssetImage
        src={publicAsset("images/mms/mms-montage.jpg")}
        alt="MMS Umzug bei Möbeltransport und Montage"
        fallbackLabel="Montagebild fehlt"
        className="why-image"
      />
    </section>
  );
}
