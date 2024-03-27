import React, { useState } from "react";
import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
import {
  aboutusIcon,
  dashboardIcon,
  logoutIcon,
  membershipIcon,
  menuIcon,
  targetIcon,
} from "../../constants/assets";

function Header() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const links = [
    {
      id: 1,
      name: "Log out",
      path: "/logout",
      icon: logoutIcon,
      active: location.pathname === "/logout",
    },
    {
      id: 2,
      name: "Dashboard",
      path: "/dashboard",
      icon: dashboardIcon,
      active: location.pathname === "/dashboard",
    },
    {
      id: 3,
      name: "Set Target",
      path: "/target",
      icon: targetIcon,
      active: location.pathname === "/target",
    },
    {
      id: 5,
      name: "My Membership",
      path: "/membership",
      icon: membershipIcon,
      active: location.pathname === "/membership",
    },
    {
      id: 6,
      name: "About Us",
      path: "/about-us",
      icon: aboutusIcon,
      active: location.pathname === "/about-us",
    },
  ];

  return (
    <header>
      <Link to="/">
        <img src="/Logo.png" alt="logo" className="Header__logo" />
      </Link>
      <div className="Header__links">
        <ul className={open ? "active" : ""}>
          {links.map((link) => (
            <li>
              <Link to={link.path} className={link.active ? "active" : ""}>
                <img src={link.icon} alt="aboutusIcon" />
                &nbsp;{link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <img
        src={menuIcon}
        alt="menuIcon"
        className="Header__menuIcon"
        onClick={() => setOpen(!open)}
      />
    </header>
  );
}

export default Header;
