import React from "react";
import { Link } from "./react-router-dom";
import FingerprintIcon from "@material-ui/icons/Fingerprint";

import HorizontalSplitIcon from "@material-ui/icons/HorizontalSplit";
import "./onepagewebsite.css";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <FingerprintIcon />
            HAYAT
          </Link>
          <div className="menu-icon"></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
