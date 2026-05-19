import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { allServices, services } from "../data/services";

export function ServiceCards() {
  return (
    <section className="services-section" id="leistungen">
      <div className="container">
        <div className="section-heading center">
          <span>Unsere Leistungen</span>
          <h2>
            Wir bieten <em>mehr als nur</em> Umzüge
          </h2>
          <p>Alles aus einer Hand - schnell, sauber und zuverlässig.</p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                className="service-card"
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <div className="icon-bubble">
                  <Icon aria-hidden="true" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#kontakt" aria-label={`${service.title} anfragen`}>
                  <ArrowRight aria-hidden="true" />
                </a>
              </motion.article>
            );
          })}
        </div>
        <div className="service-tags" aria-label="Weitere Angebote">
          {allServices.map((service) => (
            <a key={service} href="#kontakt">
              {service}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
