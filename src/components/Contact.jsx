import { useEffect } from "react";
import "../styles/Contact.css";

const Contact = () => {
  useEffect(() => {
      document.title = "Dominion Taxidermy | Contact";
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="container page" id="contact">
      <h1>Contact</h1>
    </div>
  )
}

export default Contact;