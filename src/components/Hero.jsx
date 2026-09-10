import { ArrowRight, Truck, PackageCheck, MessageCircle } from "lucide-react";

const brands = [
  { name: "Mitsubishi", src: "/images/brands/mitsubishi.svg" },
  { name: "Isuzu", src: "/images/brands/isuzu.svg" },
  { name: "Nissan", src: "/images/brands/nissan.svg" },
  { name: "Mazda", src: "/images/brands/mazda.svg" },
  { name: "Toyota", src: "/images/brands/toyota.svg" },
  { name: "Hino", src: "/images/brands/hino.svg" },
];

export default function Hero() {
  return <>
    <section className="hero truck-hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">JAPAN TO SRI LANKA · AUTORA</p>
        <h1>Built for work.<br/><em>Back on the road.</em></h1>
        <p className="hero-text">Brand-new and reconditioned truck spare parts imported from Japan. Find the parts your truck needs with Autora.</p>
        <div className="hero-actions">
          <a className="primary" href="#catalogue">Explore truck parts <ArrowRight size={18}/></a>
          <a className="secondary" href="#contact"><MessageCircle size={18}/> Ask our team</a>
        </div>
        <div className="trust-row"><span><PackageCheck size={18}/> New & reconditioned</span><span><Truck size={18}/> Online orders & delivery available</span></div>
      </div>
      <div className="truck-hero-image"><img src="/images/autora-building.webp" alt="Autora premises in Kesbewa" fetchPriority="high"/><div className="image-caption">Your next journey starts with the right part.</div></div>
    </section>

    <section className="brand-strip" aria-label="Truck brands we supply">
      <p>JAPANESE BRANDS. LOCAL SUPPORT.</p>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1.25rem 2.1rem" }}>
        {brands.map(({ name, src }) => (
          <div key={name} style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
            <img src={src} alt={name} style={{ width: "34px", height: "34px", objectFit: "contain", display: "block" }} />
            <strong style={{ fontSize: "1.2rem", whiteSpace: "nowrap" }}>{name}</strong>
          </div>
        ))}
        <span>&amp; many more</span>
      </div>
    </section>
  </>;
}
