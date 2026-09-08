import { categories } from "../data";

export default function Categories({ onSelectCategory }) {
  return (
    <section className="content-section" id="categories">
      <p className="small-title">CATEGORIES</p>
      <h2>Everything your vehicle needs</h2>
      <div className="category-grid">
        {categories.map((category) => (
          <button key={category.name} onClick={() => onSelectCategory(category.name)}>
            <span>{category.icon}</span>
            <strong>{category.name}</strong>
            <small>{category.description}</small>
          </button>
        ))}
      </div>
    </section>
  );
}
