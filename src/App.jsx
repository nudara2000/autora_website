import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PartsCatalogue from "./components/PartsCatalogue";
import Categories from "./components/Categories";
import WhyAutora from "./components/WhyAutora";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function selectCategory(category) {
    setSelectedCategory(category);
    document.getElementById("catalogue")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main>
      <Header />
      <Hero />
      <PartsCatalogue selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Categories onSelectCategory={selectCategory} />
      <WhyAutora />
      <Contact />
      <Footer />
    </main>
  );
}
