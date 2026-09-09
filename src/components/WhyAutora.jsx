import { PackageCheck } from "lucide-react";

const benefits = [
  ["01", "Carefully sourced", "Selected parts from trusted automotive suppliers."],
  ["02", "Fitment support", "Share your chassis number so we can check compatibility."],
  ["03", "Clear communication", "Real availability updates without unnecessary delays."],
];

export default function WhyAutora() {
  return (
    <section className="why" id="why-us">
      <div style={{ minWidth: 0, background: "#0c1113", padding: "2rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1.5rem" }}>
        <video
          controls
          playsInline
          preload="none"
          poster="/images/autora-video-poster.jpg"
          aria-label="Autora company video"
          width="480"
          height="848"
          style={{ display: "block", width: "100%", maxWidth: "360px", height: "auto", aspectRatio: "480 / 848", objectFit: "contain", background: "#000", borderRadius: "8px" }}
        >
          <source src="/videos/autora-company.mp4" type="video/mp4" />
          Your browser does not support embedded video. <a href="/videos/autora-company.mp4">Watch the Autora video</a>.
        </video>
        <p style={{ display: "flex", alignItems: "center", gap: ".75rem", margin: 0 }}>
          <PackageCheck aria-hidden="true" />
          <span>Every part inspected · Checked before dispatch</span>
        </p>
      </div>
      <div className="why-copy">
        <p className="section-kicker">THE AUTORA STANDARD</p>
        <h2>More confidence in every kilometre.</h2>
        <p>Finding a spare part should not feel uncertain. We help you identify the correct fit, verify its condition and arrange reliable delivery.</p>
        {benefits.map(([number, title, description]) => (
          <div className="benefit" key={number}>
            <span>{number}</span>
            <div><strong>{title}</strong><p>{description}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
