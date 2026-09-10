const brands = [
  { name: "Mitsubishi", mark: "◆◆◆", className: "mitsubishi" },
  { name: "Isuzu", mark: "ISUZU", className: "isuzu" },
  { name: "Nissan", mark: "NISSAN", className: "nissan" },
  { name: "Mazda", mark: "◖M◗", className: "mazda" },
  { name: "Toyota", mark: "◎", className: "toyota" },
  { name: "Hino", mark: "H", className: "hino" },
];

export default function BrandGallery() {
  return (
    <section className="brand-gallery">
      <p className="section-kicker">VEHICLE BRANDS WE SUPPORT</p>
      <h2>Parts for trusted Japanese vehicles.</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        {brands.map(({ name, mark, className }) => (
          <div
            key={name}
            aria-label={name}
            style={{
              minHeight: "190px",
              display: "grid",
              placeItems: "center",
              alignContent: "center",
              gap: "1rem",
              padding: "1.5rem",
              background: "#fff",
              border: "1px solid #dbe1e3",
            }}
          >
            <span
              className={className}
              aria-hidden="true"
              style={{
                fontFamily: "Arial Black, Arial, sans-serif",
                fontSize: name === "Mitsubishi" ? "2.35rem" : "1.9rem",
                fontWeight: 900,
                letterSpacing: name === "Isuzu" ? "-.12em" : ".04em",
                lineHeight: 1,
              }}
            >
              {mark}
            </span>
            <strong style={{ fontSize: ".85rem", letterSpacing: ".12em", textTransform: "uppercase" }}>
              {name}
            </strong>
          </div>
        ))}
      </div>
    </section>
  );
}
