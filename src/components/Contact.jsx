export default function Contact() {
  function submitForm(event) {
    event.preventDefault();
    alert("Thank you! We received your enquiry.");
  }

  return (
    <section className="contact" id="contact">
      <div>
        <p className="small-title">CONTACT US</p>
        <h2>Tell us what you need</h2>
        <p>Send your vehicle make, model, year and chassis number.</p>
      </div>
      <form onSubmit={submitForm}>
        <input required placeholder="Your name" />
        <input required placeholder="Phone or WhatsApp number" />
        <textarea required rows="4" placeholder="Vehicle and required part" />
        <button className="main-button">Send Enquiry</button>
      </form>
    </section>
  );
}
