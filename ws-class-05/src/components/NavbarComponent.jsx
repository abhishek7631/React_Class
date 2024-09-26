import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaBars, FaMapMarkedAlt } from "react-icons/fa";
import LoginSignupModal from "./LoginSignupModal";
import MapModal from "./MapModal";

const NavbarComponent = () => {
  const [showLoginSignup, setShowLoginSignup] = useState(false);
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="navbar-container">
      {/* Hamburger Icon for Login/Signup */}
      <div
        className="hamburger-icon-left"
        onClick={() => setShowLoginSignup(true)}
      >
        <FaBars size={30} />
      </div>

      {/* Hamburger Icon for Map */}
      <div className="hamburger-icon-right" onClick={() => setShowMap(true)}>
        <FaMapMarkedAlt size={30} />
      </div>

      {/* Login/Signup Modal */}
      <LoginSignupModal
        show={showLoginSignup}
        onHide={() => setShowLoginSignup(false)}
      />

      {/* Map Modal */}
      <MapModal show={showMap} onHide={() => setShowMap(false)} />
    </div>
  );
};

export default NavbarComponent;
