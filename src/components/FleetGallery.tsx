import { motion } from "framer-motion";
import { galleryImages } from "../data/gallery";
import { AssetImage } from "./AssetImage";

export function FleetGallery() {
  return (
    <section className="gallery-section" id="galerie">
      <div className="container">
        <motion.div
          className="section-heading center compact"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.42, ease: "easeOut" }}
        >
          <span>Unser Fuhrpark</span>
          <h2>Echte MMS-Bilder im Einsatz</h2>
        </motion.div>
        <div className="gallery-strip" aria-label="Fuhrpark Galerie">
          {galleryImages.map((image, index) => (
            <motion.figure
              className="gallery-card"
              key={image.src}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.42, delay: index * 0.05, ease: "easeOut" }}
            >
              <AssetImage src={image.src} alt={image.alt} fallbackLabel="Originalbild fehlt" className="gallery-image" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
