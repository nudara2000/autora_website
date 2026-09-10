import { PackageCheck, Truck, MessageCircle } from "lucide-react";
const benefits = [
  [PackageCheck,"Two ways to keep moving","Choose brand-new or reconditioned parts to suit your truck and requirements."],
  [MessageCircle,"Let’s find the right fit","Send your truck make, model, chassis number and a photo of the part. Our team will help with your enquiry."],
  [Truck,"Order online. Arrange delivery.","Enquire from wherever you are. Ask our team about delivery to your location, charges and timings."]
];
export default function WhyAutora() {
  return <section className="why" id="why-us">
    <div className="company-film">
      <p className="section-kicker">MEET AUTORA</p>
      <video controls playsInline preload="none" poster="/images/autora-reveal-poster.jpg" width="720" height="1280" aria-label="Autora cinematic introduction">
        <source src="/videos/autora-reveal.mp4" type="video/mp4"/>
        Your browser does not support video. <a href="/videos/autora-reveal.mp4">Watch our introduction</a>.
      </video>
      <p>From Japan to your next journey.</p>
    </div>
    <div className="why-copy"><p className="section-kicker">THE AUTORA STANDARD</p><h2>For the trucks that keep business moving.</h2><p>We import truck spare parts from Japan, supplying brand-new and reconditioned options for Mitsubishi, Isuzu, Nissan, Mazda, Toyota, Hino and more.</p>{benefits.map(([Icon,title,description])=><div className="benefit" key={title}><Icon aria-hidden="true"/><div><strong>{title}</strong><p>{description}</p></div></div>)}</div>
  </section>;
}
