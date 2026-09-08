export default function Hero() {
  function viewProducts() {
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="hero" id="home">
      <div>
        <p className="small-title">TRUSTED VEHICLE SPARE PARTS</p>
        <h1>The right part.<br /><span>Right when you need it.</span></h1>
        <p>Quality-tested spare parts for Japanese vehicles, delivered across Sri Lanka.</p>
        <button className="main-button" onClick={viewProducts}>Explore Parts →</button>
      </div>
      <div className="hero-card">
        <div className="large-icon">⚙️</div>
        <small>FEATURED THIS WEEK</small>
        <h2>Premium vehicle parts</h2>
        <p>Checked and ready for the road.</p>
      </div>
    </section>
  );
}
