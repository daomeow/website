import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <section className="navigation-container">
      {location.pathname !== "/" &&
        <NavLink to="/" className="navigation-buttons">Home</NavLink>
      }
      <NavLink to="/about" className="navigation-buttons">About</NavLink>
      <NavLink to="/projects" className="navigation-buttons">Projects</NavLink>
      <NavLink to="/photos" className="navigation-buttons">Photos</NavLink>
    </section>
  )
}

export default Header;