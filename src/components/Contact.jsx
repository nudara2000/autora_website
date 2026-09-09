import { ArrowRight, MessageCircle, ShoppingBag } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return <section className="contact" id="contact"><div><p className="section-kicker">CAN’T FIND YOUR PART?</p><h2>Tell us what you need.</h2><p>Send the vehicle make, model, year and chassis number. Our parts team will respond with availability.</p><div className="contact-points"><span><MessageCircle/> Quick WhatsApp support</span><span><ShoppingBag/> Retail & trade enquiries</span></div></div><form onSubmit={event => { event.preventDefault(); setSubmitted(true); }}><label>Your name<input required placeholder="Name"/></label><label>Phone or WhatsApp<input required placeholder="07X XXX XXXX"/></label><label>Vehicle & part<textarea required placeholder="Example: Toyota Aqua 2018, left headlight" rows="3"/></label><button className="primary" type="submit">Send enquiry <ArrowRight size={18}/></button>{submitted && <p className="success">Thank you. We received your enquiry.</p>}</form></section>;
}
