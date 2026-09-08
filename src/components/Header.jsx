import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function goTo(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  return (
    <>
      <div className="top-bar">Islandwide delivery available across Sri Lanka</div>
      <header>
        <a className="logo" href="#home"><span>A</span> AUTORA</a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open navigation menu">
          {menuOpen ? "✕" : "☰"}
        </button>
        <nav className={menuOpen ? "open" : ""}>
          <button onClick={() => goTo("products")}>Parts Catalogue</button>
          <button onClick={() => goTo("categories")}>Categories</button>
          <button onClick={() => goTo("about")}>Why Autora</button>
          <button onClick={() => goTo("contact")}>Contact</button>
        </nav>
      </header>
    </>
  );
}
