import "../styles/Footer.css"

const Footer = () => {
  return (
    <div id="footer">
      <div className="row">
        <div className="col">
          <ul id="footer-nav">
            <li className="footer-link"><a>Home</a></li>
            <li className="footer-link"><a>Gallery</a></li>
            <li className="footer-link"><a>About</a></li>
            <li className="footer-link"><a>Services</a></li>
            <li className="footer-link"><a>Contact</a></li>
          </ul>
        </div>
        <div className="col" id="footer-contact">
          <h1 className="footer-contact-info-header">Contact Info</h1>
          <h2 className="footer-contact-info">Matthew Jerabek</h2>
          <h2 className="footer-contact-info">1234 Chippewa Trail, Bruce, WI 54757</h2>
          <h2 className="footer-contact-info">(715) 642-4966</h2>
          <h2 className="footer-contact-info">dominiontaxidermywi@gmail.com</h2>
        </div>
      </div>
    </div>
  )
};

export default Footer;