import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <section className="navigation-container">
      <NavLink to="/" className="navigation-buttons">Home</NavLink>
      <NavLink to="/projects" className="navigation-buttons">Projects</NavLink>
      <NavLink to="/photos" className="navigation-buttons">Photos</NavLink>
    </section>
  )
}

export default Header;