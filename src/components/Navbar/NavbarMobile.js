import React, { useState, useEffect } from "react";
import NavbarLogo from "./csdv2Logonavbar.svg";
import { Link } from "react-router-dom";

import { FaInstagram, FaFacebook } from 'react-icons/fa';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    let closeTimeout;
    if (isOpen) {
      closeTimeout = setTimeout(() => {
        closeMenu();
      }, 7000); // Close menu after 7 seconds
    }

    return () => {
      clearTimeout(closeTimeout);
    };
  }, [isOpen]);

  return (
    <div className="z-10 sticky top-0 bg-white px-5 sm:hidden">
      <div className="flex items-center py-2">
      <Link to='/'><img
          className="h-auto w-40"
          src={NavbarLogo}
          alt="csd_logo"
        /></Link>
        <button className="text-3xl  ml-auto" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white text-black p-4 flex flex-col justify-center items-center">
          <button
            className="text-2xl absolute top-2 right-2"
            onClick={closeMenu}
          >
            ✕
          </button>
          <Link to='/'><img
            className="pl-2 h-auto w-44 lg:w-52"
            src={NavbarLogo}
            alt="csd_logo"/></Link>
          
          <div className="flex flex-col mt-6 text-center space-y-3">
  <Link to="/best-event-management-company-vizag">
    <a className="text-2xl my-2" onClick={closeMenu}>
      Events
    </a>
  </Link>
  <hr />
  <Link to="/digital-creative-media-in-vizag">
    <a className="text-2xl my-2" onClick={closeMenu}>
      Digital Creative Media
    </a>
  </Link>
  <hr />
  <Link to="/branding-agency-in-vizag">
    <a className="text-2xl my-2" onClick={closeMenu}>
      Branding
    </a>
  </Link>
  <hr />
  <Link to="/advertising-company-in-vizag">
    <a className="text-2xl my-2" onClick={closeMenu}>
      Advertising
    </a>
  </Link>
  <hr />
  <Link to="/aboutus">
    <a className="text-2xl my-2" onClick={closeMenu}>
      About
    </a>
  </Link>
  <hr />
  <Link to="/contact">
    <a className="text-2xl my-2" onClick={closeMenu}>
      Contact Us
    </a>
  </Link>
  <hr />
  <Link to="/clients">
    <a className="text-2xl my-2" onClick={closeMenu}>
      Clients
    </a>
  </Link>
  <hr />
  <Link to="/blogs">
    <a className="text-2xl my-2" onClick={closeMenu}>
      Blogs
    </a>
  </Link>
  <hr />
  <Link to="/reviews">
    <a className="text-2xl my-2" onClick={closeMenu}>
      Reviews
    </a>
  </Link>
</div>

<p className="text-sm mb-2 mt-4">Follow Us On</p>
<div className="flex justify-center ">
  
  <a
    href="https://www.instagram.com/your_instagram_url"
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl mx-2"
  >
    <FaInstagram />
  </a>
  <a
    href="https://www.facebook.com/your_facebook_url"
    target="_blank"
    rel="noopener noreferrer"
    className="text-2xl mx-2"
  >
    <FaFacebook />
  </a>
</div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
