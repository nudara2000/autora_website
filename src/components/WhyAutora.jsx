import { useEffect, useRef, useState } from "react";
import { ArrowRight, MessageCircle, Package, PackageCheck, ShipWheel, Truck } from "lucide-react";

const benefits = [
  [PackageCheck, "Two ways to keep moving", "Choose brand-new or reconditioned parts to suit your truck and requirements."],
  [MessageCircle, "Let’s find the right fit", "Send your truck make, model, chassis number and a photo of the part. Our team will help with your enquiry."],
  [Truck, "Order online. Arrange delivery.", "Enquire from wherever you are. Ask our team about delivery to your location, charges and timings."],
];

export default function WhyAutora() {
  const journeyRef = useRef(null);
  const [isJourneyPlaying, setIsJourneyPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsJourneyPlaying(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    if (journeyRef.current) observer.observe(journeyRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="why" id="why-us">
      <div className={"company-film import-journey" + (isJourneyPlaying ? " journey-playing" : "")} ref={journeyRef}>
        <p className="section-kicker">JAPAN TO SRI LANKA</p>
        <h2>Your parts. In motion.</h2>

        <div className="journey-track" aria-label="Autora import journey animation">
          <div className="journey-stage journey-pack">
            <span className="journey-step">01</span>
            <Package aria-hidden="true" />
            <strong>Pack in Japan</strong>
            <small>Quality-checked parts secured for export</small>
          </div>

          <ArrowRight className="journey-arrow arrow-one" aria-hidden="true" />

          <div className="journey-stage journey-ship">
            <span className="journey-step">02</span>
            <ShipWheel aria-hidden="true" />
            <strong>Cross the ocean</strong>
            <small>Containers travel safely by ship</small>
            <span className="journey-wave" aria-hidden="true" />
          </div>

          <ArrowRight className="journey-arrow arrow-two" aria-hidden="true" />

          <div className="journey-stage journey-truck">
            <span className="journey-step">03</span>
            <Truck aria-hidden="true" />
            <strong>Arrive at Autora</strong>
            <small>Delivered ready for your next journey</small>
          </div>
        </div>
      </div>

      <div className="why-copy">
        <p className="section-kicker">THE AUTORA STANDARD</p>
        <h2>For the trucks that keep business moving.</h2>
        <p>We import truck spare parts from Japan, supplying brand-new and reconditioned options for Mitsubishi, Isuzu, Nissan, Mazda, Toyota, Hino and more.</p>
        {benefits.map(([Icon, title, description]) => (
          <div className="benefit" key={title}>
            <Icon aria-hidden="true" />
            <div><strong>{title}</strong><p>{description}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
