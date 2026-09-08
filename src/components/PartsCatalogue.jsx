import { useState } from "react";
import { categories, products } from "../data";

export default function PartsCatalogue({ selectedCategory, setSelectedCategory }) {
  const [search, setSearch] = useState("");

  const visibleProducts = products.filter((product) => {
    const searchableText = product.name + product.vehicle + product.code;
    const matchesSearch = searchableText.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  function contactUs() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="content-section" id="products">
      <p className="small-title">PARTS CATALOGUE</p>
      <h2>Find your part in seconds</h2>

      <input
        className="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search by part, vehicle or part number"
      />

      <div className="filter-buttons">
        {["All", ...categories.map((item) => item.name)].map((name) => (
          <button
            key={name}
            className={selectedCategory === name ? "active" : ""}
            onClick={() => setSelectedCategory(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {visibleProducts.map((product) => {
          const category = categories.find((item) => item.name === product.category);
          return (
            <article className="product-card" key={product.code}>
              <div className="product-image">
                {product.image
                  ? <img src={product.image} alt={product.name} />
                  : <span>{category?.icon}</span>}
                <small>{product.label}</small>
              </div>
              <div className="product-details">
                <small>{product.code}</small>
                <h3>{product.name}</h3>
                <p>{product.vehicle}</p>
                <button onClick={contactUs}>Check availability →</button>
              </div>
            </article>
          );
        })}
      </div>

      {visibleProducts.length === 0 && (
        <div className="no-results">No matching parts found. Please send us an enquiry.</div>
      )}
    </section>
  );
}
