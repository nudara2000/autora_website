import { ArrowRight, MessageCircle, ShoppingBag } from "lucide-react";

// Sri Lankan number 0711000333 in international format.
const whatsappNumber = "94711000333";
const whatsappUrl = message =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export default function Contact() {
  function sendEnquiry(event) {
    event.preventDefault();
    const details = new FormData(event.currentTarget);
    const message = [
      "Hello Autora, I would like to enquire about a spare part.",
      "",
      `Name: ${details.get("name").trim()}`,
      `Phone / WhatsApp: ${details.get("phone").trim()}`,
      `Vehicle & part: ${details.get("part").trim()}`,
    ].join("\n");

    window.location.assign(whatsappUrl(message));
  }

  return (
    <section className="contact" id="contact">
      <div>
        <p className="section-kicker">CAN’T FIND YOUR PART?</p>
        <h2>Tell us what you need.</h2>
        <p>
          Send the vehicle make, model, year and chassis number.
          Our parts team will respond with availability.
        </p>
        <div className="contact-points">
          <a
            href={whatsappUrl("Hello Autora, I need help finding a spare part.")}
            style={{ color: "inherit", textDecoration: "underline", textUnderlineOffset: "4px" }}
          >
            <span><MessageCircle aria-hidden="true" /> Quick WhatsApp support</span>
          </a>
          <span style={{ flexWrap: "wrap" }}>
            <ShoppingBag aria-hidden="true" /> Retail &amp; trade enquiries:
            <a href="tel:+94711000666" style={{ color: "inherit", textUnderlineOffset: "4px" }}>
              0711000666
            </a>
          </span>
        </div>
      </div>
      <form onSubmit={sendEnquiry}>
        <label>
          Your name
          <input name="name" required autoComplete="name" placeholder="Name" />
        </label>
        <label>
          Phone or WhatsApp
          <input name="phone" type="tel" required autoComplete="tel" placeholder="07X XXX XXXX" />
        </label>
        <label>
          Vehicle & part
          <textarea name="part" required placeholder="Example: Toyota Aqua 2018, left headlight" rows="3" />
        </label>
        <button className="primary" type="submit">
          Send enquiry <ArrowRight size={18} aria-hidden="true" />
        </button>
        <p style={{ color: "#4f5a5e", fontSize: "0.875rem", lineHeight: 1.5, marginBottom: 0 }}>
          Opens WhatsApp with your details. Tap Send there to send your enquiry.
        </p>
      </form>
    </section>
  );
}
