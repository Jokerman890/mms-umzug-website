import { ContactSection } from "./components/ContactSection";
import { FAQ } from "./components/FAQ";
import { FleetGallery } from "./components/FleetGallery";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MobileStickyCTA } from "./components/MobileStickyCTA";
import { ProcessSteps } from "./components/ProcessSteps";
import { ServiceCards } from "./components/ServiceCards";
import { TrustBar } from "./components/TrustBar";
import { WhyUs } from "./components/WhyUs";
import { company } from "./data/company";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: company.name,
  legalName: company.legalName,
  url: company.url,
  telephone: "+49 176 40551085",
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Burger Heerstr. 32",
    postalCode: "28719",
    addressLocality: "Bremen",
    addressCountry: "DE",
  },
  areaServed: company.area,
  serviceType: [
    "Umzug",
    "Entrümpelung",
    "Abrissarbeiten",
    "Gartenarbeit",
    "Möbelmontage",
    "Transport",
  ],
};

export function App() {
  return (
    <>
      <script type="application/ld+json">{JSON.stringify(localBusinessJsonLd)}</script>
      <Header />
      <main>
        <Hero />
        <ServiceCards />
        <TrustBar />
        <ProcessSteps />
        <FleetGallery />
        <section className="section-grid container" aria-label="Warum MMS und Kontakt">
          <WhyUs />
          <ContactSection />
        </section>
        <FAQ />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
