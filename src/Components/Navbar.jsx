import React from "react";
import { NavLink } from "react-router-dom";

const menu = ["About", "Resume", "Portfolio", "Contact"];

const Navbar = () => {
  return (
    <nav className="flex">
      {menu.map((m) => (
        <NavItem key={m} menuItem={m} />
      ))}
    </nav>
  );
};

const NavItem = (props) => {
  return (
    <a
      href={`#${props.menuItem.toLowerCase()}`}
      activeClassName="text-red-600 bg-green-100"
      className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-red-700 text-2xl font-bold"
    >
      {props.menuItem}
    </a>
    // <NavLink
    //   to={`/${props.menuItem.toLowerCase()}`}
    //   activeClassName="text-red-600 bg-green-100"
    //   className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-red-700 text-2xl font-bold"
    // >
    //   {props.menuItem}
    // </NavLink>
  );
};

export default Navbar;
