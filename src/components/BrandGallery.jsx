import { useRef } from "react";
import { ArrowRight } from "lucide-react";

// Curated showroom and stock photos.
const images = [
  ["autora-shop-7983.jpg", "Autora showroom and customer seating area"],
  ["autora-shop-7982.jpg", "Truck spare parts displayed on Autora showroom shelves"],
  ["autora-shop-7979.jpg", "Autora shop interior and parts displays"],
  ["autora-shop-7981.jpg", "Outdoor storage racks at Autora"],
  ["autora-shop-7984.jpg", "Truck body parts stored inside the Autora warehouse"],
  ["autora-stock-bumpers.jpg", "Truck bumpers and body panels in Autora stock"],
  ["autora-stock-grilles.jpg", "Truck grilles and front body parts on display"],
  ["autora-stock-boxed-parts.jpg", "Boxed truck spare parts ready for delivery"],
  ["autora-stock-steering-parts.jpg", "Truck steering and suspension parts in stock"],
  ["autora-chrome-parts-display.jpg", "Chrome truck parts on display at Autora"],
  ["autora-parts-shelves.jpg", "Autora shelves stocked with truck spare parts"],
];

export default function BrandGallery() {
  const trackRef = useRef(null);

  function showNextPhotos() {
    trackRef.current?.scrollBy({
      left: trackRef.current.clientWidth * 0.78,
      behavior: "smooth",
    });
  }

  return (
    <section className="brand-gallery">
      <p className="section-kicker">THIS IS AUTORA</p>
      <h2>Inside Autora. Ready for the road.</h2>

      <div className="brand-gallery-track" ref={trackRef}>
        {images.map(([image, description]) => (
          <figure className="brand-gallery-item" key={image}>
            <img
              src={"/images/" + image}
              alt={description}
              loading="lazy"
              decoding="async"
              width="960"
              height="1280"
            />
          </figure>
        ))}
      </div>

      <button className="gallery-next" type="button" onClick={showNextPhotos} aria-label="Show more Autora photos">
        <ArrowRight size={22} />
      </button>
    </section>
  );
}
