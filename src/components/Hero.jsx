import { ArrowRight, BadgeCheck, CarFront, CircleGauge, Cog, MessageCircle, ShieldCheck, Truck } from "lucide-react";

export default function Hero() {
  const goTo = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return <section className="hero" id="top">
    <div className="hero-copy"><p className="eyebrow"><span/> Trusted vehicle spare parts</p><h1>The right part.<br/><em>Right when you need it.</em></h1><p className="hero-text">Quality-tested spare parts for Japanese vehicles, sourced with care and delivered across Sri Lanka.</p><div className="hero-actions"><button className="primary" onClick={() => goTo("catalogue")}>Explore parts <ArrowRight size={18}/></button><button className="secondary" onClick={() => goTo("contact")}><MessageCircle size={18}/> Request a part</button></div><div className="trust-row"><span><BadgeCheck size={18}/> Quality checked</span><span><Truck size={18}/> Fast delivery</span><span><ShieldCheck size={18}/> Trusted support</span></div></div>
    <div className="hero-visual" aria-label="Autora featured spare parts"><div className="visual-grid"/><div className="part-orbit orbit-one"><Cog/></div><div className="part-orbit orbit-two"><CarFront/></div><div className="hero-badge"><span>10+</span> years of<br/>parts expertise</div><div className="hero-product"><div className="product-icon"><CircleGauge/></div><small>FEATURED THIS WEEK</small><strong>Premium brake systems</strong><span>Built for safety. Ready for the road.</span></div></div>
  </section>;
}
