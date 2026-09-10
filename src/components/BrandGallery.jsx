const brands = [
  { name: "Mitsubishi", mark: "◆◆◆", color: "#e60012" },
  { name: "Isuzu", mark: "ISUZU", color: "#e31b23" },
  { name: "Nissan", mark: "NISSAN", color: "#20242a" },
  { name: "Mazda", mark: "◖M◗", color: "#1d2630" },
  { name: "Toyota", mark: "◎", color: "#eb0a1e" },
  { name: "Hino", mark: "H", color: "#e31b23" },
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
        {brands.map(({ name, mark, color }) => (
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
              aria-hidden="true"
              style={{
                color,
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
