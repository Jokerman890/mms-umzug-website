import { motion } from "framer-motion";
import { faqItems } from "../data/faq";

export function FAQ() {
  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <motion.div
          className="section-heading center compact"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.42, ease: "easeOut" }}
        >
          <span>FAQ</span>
          <h2>Häufige Fragen</h2>
        </motion.div>
        <div className="faq-grid">
          {faqItems.map((item, index) => (
            <motion.details
              key={item.question}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.34, delay: index * 0.04, ease: "easeOut" }}
            >
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
