import { ArrowRight, CarFront, ChevronRight, CircleGauge, Cog, Zap } from "lucide-react";
import { categories } from "../data";

const icons = {
  car: CarFront,
  cog: Cog,
  zap: Zap,
  gauge: CircleGauge,
  cabin: CarFront,
  heavy: Cog,
  accessories: Zap,
  chrome: CarFront,
};

export default function Categories({ onSelectCategory }) {
  return <section className="category-section" id="categories"><div className="section-heading"><div><p className="section-kicker">SHOP BY CATEGORY</p><h2>Everything your vehicle needs</h2></div><button onClick={() => onSelectCategory("All")}>View all parts <ArrowRight size={17}/></button></div><div className="category-grid">{categories.map(category => { const Icon = icons[category.icon]; return <button key={category.name} onClick={() => onSelectCategory(category.name)}><span className="category-icon"><Icon/></span><span><strong>{category.name}</strong><small>{category.description}</small></span><ChevronRight/></button>; })}</div></section>;
}
