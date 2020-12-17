import React from "react";
import { NavLink } from "react-router-dom";

const menu = ["About", "Resume", "Portfolio", "Contact"];

const Navbar = () => {
  return (
    <nav>
      {menu.map((m) => (
        <NavItem key={m} menuItem={m} />
      ))}
    </nav>
  );
};

const NavItem = (props) => {
  return (
    <div className="navItem">
      <NavLink
        to={`/${props.menuItem.toLowerCase()}`}
        activeClassName="activeLink"
      >
        {props.menuItem}
      </NavLink>
    </div>
  );
};

export default Navbar;
