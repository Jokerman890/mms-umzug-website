import { galleryImages } from "../data/gallery";
import { AssetImage } from "./AssetImage";

export function FleetGallery() {
  return (
    <section className="gallery-section" id="galerie">
      <div className="container">
        <div className="section-heading center compact">
          <span>Unser Fuhrpark</span>
          <h2>Echte MMS-Bilder im Einsatz</h2>
        </div>
        <div className="gallery-strip" aria-label="Fuhrpark Galerie">
          {galleryImages.map((image) => (
            <figure className="gallery-card" key={image.src}>
              <AssetImage src={image.src} alt={image.alt} fallbackLabel="Originalbild fehlt" className="gallery-image" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
