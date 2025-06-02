import { useEffect } from "react";
import "../styles/Contact.css";

const Contact = () => {
  useEffect(() => {
      document.title = "Dominion Taxidermy | Contact";
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="page" id="contact">
        <img id="contact-cover" src="https://res.cloudinary.com/dawteptkh/image/upload/v1748818811/Dominiontaxidermy/IMG_6842-preview_t4c3hb.jpg" />
      <div id="contact-title">
        <h1>Contact</h1>
      </div>
      <section>
        <div className="contact-section">
          <h2>Please call Matthew or leave a message with any inquiries</h2>
          <h3>Phone: <a href="tel:7156424966">(715) 642-4966</a></h3>
          <h3>Email: dominiontaxidermywi@gmail.com</h3>
          <h3>N485 Chippewa Trail, New Auburn, WI 54757</h3>
          <h2>(Open by appointment)</h2>
        </div>
      </section>
    </div>
  )
}

export default Contact;