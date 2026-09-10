import { ArrowRight, MessageCircle, ShoppingBag, MapPin, Phone, Facebook, Instagram, Youtube } from "lucide-react";

const linkStyle = { display: "inline-flex", alignItems: "center", gap: "0.45rem" };
const iconStyle = { flexShrink: 0 };

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
        <div className="visit-details">
          <h3>Visit Autora</h3>
          <address>No.17 A, Horana Road, Kesbewa, Piliyandala</address>
          <a style={linkStyle} href="https://www.google.com/maps/search/?api=1&amp;query=No.17+A+Horana+Road+Kesbewa+Piliyandala" target="_blank" rel="noreferrer"><MapPin size={19} style={iconStyle} aria-hidden="true" /> Find us on Google Maps</a>
          <p><strong>Online orders &amp; delivery available.</strong><br/>Contact us to confirm the part, price and delivery arrangements.</p>
          <p><a style={linkStyle} href="tel:+94711000333"><Phone size={19} style={iconStyle} aria-hidden="true" /> 071 1000 333</a> · <a style={linkStyle} href="tel:+94711000666"><Phone size={19} style={iconStyle} aria-hidden="true" /> 071 1000 666</a></p>
          <div className="social-links">
            <a style={linkStyle} href="https://www.facebook.com/autorapvtltd/" target="_blank" rel="noreferrer"><Facebook size={19} style={iconStyle} aria-hidden="true" /> Facebook</a>
            <a style={linkStyle} href="https://www.instagram.com/p/DcabB9Gkvgt/" target="_blank" rel="noreferrer"><Instagram size={19} style={iconStyle} aria-hidden="true" /> Instagram</a>
            <a style={linkStyle} href="https://www.youtube.com/@Autorapvtltd" target="_blank" rel="noreferrer"><Youtube size={19} style={iconStyle} aria-hidden="true" /> YouTube</a>
          </div>
        </div>
        <div className="contact-points">
          <a
            href={whatsappUrl("Hello Autora, I need help finding a spare part.")}
            style={{ color: "inherit", textDecoration: "underline", textUnderlineOffset: "4px" }}
          >
            <span><MessageCircle aria-hidden="true" /> Quick WhatsApp support</span>
          </a>
          <a
            href={`https://wa.me/94711000666?text=${encodeURIComponent("Hello Autora, I have a retail or trade enquiry.")}`}
            style={{ color: "inherit", textDecoration: "underline", textUnderlineOffset: "4px" }}
          >
            <span><ShoppingBag aria-hidden="true" /> Retail &amp; trade enquiries</span>
          </a>
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
          <textarea name="part" required placeholder="Example: Isuzu truck, chassis number, left headlight" rows="3" />
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
