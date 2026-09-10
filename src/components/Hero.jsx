import { ArrowRight, Truck, PackageCheck, MessageCircle } from "lucide-react";
const brands = ["Mitsubishi", "Isuzu", "Nissan", "Mazda", "Toyota", "Hino"];
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
    <section className="brand-strip" aria-label="Truck brands we supply"><p>JAPANESE BRANDS. LOCAL SUPPORT.</p><div>{brands.map(brand=><strong key={brand}>{brand}</strong>)}<span>& many more</span></div></section>
  </>;
}
