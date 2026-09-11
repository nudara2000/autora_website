import { useState } from "react";
import { CarFront, ChevronRight, CircleGauge, Cog, Search, X, Zap } from "lucide-react";
import { catalogueCategories, products } from "../data";

const icons = {
  "Body Parts": CarFront,
  Engine: Cog,
  Lighting: Zap,
  Suspension: CircleGauge,
  "Truck Cabin": CarFront,
  "Heavy Items": Cog,
  "Other Accessories": Zap,
};

export default function PartsCatalogue({ selectedCategory, setSelectedCategory }) {
  const [search, setSearch] = useState("");
  const term = search.toLowerCase().trim();
  const visibleProducts = products.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      (!term || `${product.name} ${product.vehicle} ${product.code}`.toLowerCase().includes(term))
  );
  const contactUs = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="finder" id="catalogue">
      <div><p className="section-kicker">PART FINDER</p><h2>Find your part in seconds</h2></div>
      <div className="search-box">
        <Search size={21}/>
        <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search by part, vehicle or part number…" aria-label="Search spare parts"/>
        {search && <button onClick={() => setSearch("")} aria-label="Clear search"><X size={18}/></button>}
      </div>
      <div className="filters">
        {["All", ...catalogueCategories].map((name) => (
          <button key={name} className={selectedCategory === name ? "active" : ""} onClick={() => setSelectedCategory(name)}>{name}</button>
        ))}
      </div>
      <div className="parts-grid">
        {visibleProducts.map((product, index) => {
          const Icon = icons[product.category];
          return (
            <article className="part-card" key={product.code}>
              <div className={`part-image tone-${index % 4}`}>
                <span>{product.label}</span>
                {product.image ? <img src={product.image} alt={product.name}/> : <Icon/>}
              </div>
              <div className="part-info">
                <small>{product.code}</small><h3>{product.name}</h3><p>{product.vehicle}</p>
                <button onClick={contactUs}>Check availability <ChevronRight size={17}/></button>
              </div>
            </article>
          );
        })}
        {!visibleProducts.length && <div className="empty-state"><Search/><h3>No exact match yet</h3><p>Send us your vehicle model or chassis number and our team will help.</p><button className="primary" onClick={contactUs}>Request this part</button></div>}
      </div>
    </section>
  );
}
