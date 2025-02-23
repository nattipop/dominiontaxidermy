import "../styles/Nav.css"
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="container" id="nav">
      <ul>
        <li>
          <Link to="/"><h2>Home</h2></Link>
        </li>
        <li>
          <Link to="/gallery"><h2>Gallery</h2></Link>
        </li>
        <li>
          <Link to="/about"><h2>About</h2></Link>
        </li>
        <li>
          <Link to="/services"><h2>Services</h2></Link>
        </li>
        <li>
          <Link to="/contact"><h2>Contact</h2></Link>
        </li>
      </ul>
    </div>
  )
};

export default Nav;