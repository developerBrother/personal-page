import firstClass from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className={firstClass.container}>
      
      <Link to="/">Benyamin Carmeli</Link>
      
      <ul className={firstClass.tabs}>
        <li>
          <NavLink
            className={(navData) => navData.isActive && firstClass.isActive}
            to="/skills"
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => navData.isActive && firstClass.isActive}
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => navData.isActive && firstClass.isActive}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
