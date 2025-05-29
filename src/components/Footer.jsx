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
        <div className="col-3">
          <img src="https://res.cloudinary.com/dawteptkh/image/upload/v1745682273/Dominiontaxidermy/DTwhitecircle_cen486.png" alt="" width="100px" />
        </div>
        <div className="col" id="footer-contact">
          <h1 className="footer-contact-info-header">Contact Info</h1>
          <h2 className="footer-contact-info">Matthew Jerabek</h2>
          <h2 className="footer-contact-info"><a id="phone-link" href="tel:7156424966">(715) 642-4966</a></h2>
          <h2 className="footer-contact-info">N485 Chippewa Trail, New Auburn, WI 54757</h2>
          <h2 className="footer-contact-info">dominiontaxidermywi@gmail.com</h2>
        </div>
      </div>
      <div id="credits">
        <p>Website designed by <a href="https://www.vitawd.com">Vita Web Design</a></p>
        <p>© Dominion Taxidermy 2025</p>
      </div>
    </div>
  )
};

export default Footer;