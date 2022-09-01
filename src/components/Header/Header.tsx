import "./Header.css";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const buttons = [
    {id: "/", name: "Home"}, 
    {id: "/about", name: "About"}, 
    {id: "/projects", name: "Projects"}, 
    {id: "/photos", name: "Photos"}
  ];

  const createButtons = () => {
    return (
      buttons.map(nav => {
        if (nav.id !== location.pathname) {
          return <NavLink to={nav.id} className="navigation-buttons" key={nav.name}>{nav.name}</NavLink>
        }
      })
    )
  }

  return (
    <section className="navigation-container">
      {createButtons()}
    </section>
  )
}

export default Header;