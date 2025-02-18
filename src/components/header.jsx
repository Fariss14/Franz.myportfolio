import "../assets/styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h2 className="logo">frooxy</h2>
      <nav>
        <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
         <li><Link to="/about">About Me</Link></li>
          <li><a href="#works">My Works</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
