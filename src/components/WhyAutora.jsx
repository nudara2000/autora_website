import { PackageCheck } from "lucide-react";
const benefits = [["01","Carefully sourced","Selected parts from trusted automotive suppliers."],["02","Fitment support","Share your chassis number so we can check compatibility."],["03","Clear communication","Real availability updates without unnecessary delays."]];

export default function WhyAutora() {
  return <section className="why" id="why-us"><div className="why-visual"><div className="inspection-card"><PackageCheck/><strong>Every part inspected</strong><span>Checked before dispatch</span></div></div><div className="why-copy"><p className="section-kicker">THE AUTORA STANDARD</p><h2>More confidence in every kilometre.</h2><p>Finding a spare part should not feel uncertain. We help you identify the correct fit, verify its condition and arrange reliable delivery.</p>{benefits.map(item => <div className="benefit" key={item[0]}><span>{item[0]}</span><div><strong>{item[1]}</strong><p>{item[2]}</p></div></div>)}</div></section>;
}
