// Display-only shop photos. Add new JPG filenames here to extend the gallery.
const images = [
  ["autora-shop-7983.jpg", "Autora showroom and customer seating area"],
  ["autora-shop-7982.jpg", "Truck spare parts displayed on Autora showroom shelves"],
  ["autora-shop-7979.jpg", "Autora shop interior and parts displays"],
  ["autora-shop-7980.jpg", "Customer area beside the spare parts shelves"],
  ["autora-shop-7981.jpg", "Outdoor storage racks at Autora"],
  ["autora-shop-7984.jpg", "Truck body parts stored inside the Autora warehouse"],
];

export default function BrandGallery() {
  return (
    <section className="brand-gallery">
      <p className="section-kicker">THIS IS AUTORA</p>
      <h2>Inside Autora. Ready for the road.</h2>
      <div style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))" }}>
        {images.map(([image, description]) => (
          <figure key={image}>
            <img
              src={"/images/" + image}
              alt={description}
              loading="lazy"
              decoding="async"
              width="960"
              height="1280"
              style={{ width: "100%", height: "auto", aspectRatio: "3 / 4", objectFit: "contain", cursor: "default" }}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
