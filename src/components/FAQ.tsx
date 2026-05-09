import { faqItems } from "../data/faq";

export function FAQ() {
  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-heading center compact">
          <span>FAQ</span>
          <h2>Häufige Fragen</h2>
        </div>
        <div className="faq-grid">
          {faqItems.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
