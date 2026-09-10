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
      <div className="truck-hero-image"><img src="/images/autora-building-parts-lift.jpg" alt="Autora spare parts showroom and goods lift" fetchPriority="high"/><div className="image-caption">Your next journey starts with the right part.</div></div>
    </section>

    <section className="brand-strip" aria-label="Truck brands we supply">
      <p>JAPANESE BRANDS. LOCAL SUPPORT.</p>
      <div className="brand-logo-grid">
        {brands.map(({ name, src }) => (
          <div className="brand-logo-cell" key={name}>
            <img className="brand-logo-image" src={src} alt={name} />
          </div>
        ))}
      </div>
    </section>
  </>;
}
