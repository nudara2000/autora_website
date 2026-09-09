import { useState } from "react";
import { ArrowRight, Menu, MessageCircle, Sparkles, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  function goTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }
  return <>
    <div className="announcement"><span><Sparkles size={15}/> Islandwide delivery available across Sri Lanka</span><button onClick={() => goTo("contact")}>Talk to our parts team <ArrowRight size={14}/></button></div>
    <header className="nav-wrap">
      <a className="brand" href="#top" aria-label="Autora home"><img src="/autora-logo.svg" alt="Autora"/><small>GENUINE SPARES</small></a>
      <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Main navigation"><button onClick={() => goTo("catalogue")}>Parts catalogue</button><button onClick={() => goTo("categories")}>Categories</button><button onClick={() => goTo("why-us")}>Why Autora</button><button onClick={() => goTo("contact")}>Contact</button></nav>
      <button className="nav-cta" onClick={() => goTo("contact")}><MessageCircle size={18}/> Get a quote</button><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
    </header>
  </>;
}
