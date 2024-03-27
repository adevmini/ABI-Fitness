import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import {
  aboutusIcon,
  dashboardIcon,
  logoutIcon,
  membershipIcon,
  menuIcon,
  targetIcon,
} from "../../constants/assets";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <img src="/Logo.png" alt="logo" className="Header__logo" />
      <div className="Header__links">
        <ul className={open ? "active" : ""}>
          <li>
            <Link to="#!">
              <img src={logoutIcon} alt="logoutIcon" />
              &nbsp;Log out
            </Link>
          </li>
          <li>
            <Link to="#!">
              <img src={dashboardIcon} alt="dashboardIcon" />
              &nbsp;Dashboard
            </Link>
          </li>
          <li>
            <Link to="#!">
              <img src={targetIcon} alt="targetIcon" />
              &nbsp;Set Target
            </Link>
          </li>
          <li>
            <Link to="#!">
              <img src={membershipIcon} alt="membershipIcon" />
              &nbsp;My Membership
            </Link>
          </li>
          <li>
            <Link to="#!">
              <img src={aboutusIcon} alt="aboutusIcon" />
              &nbsp;About Us
            </Link>
          </li>
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
