import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/city-white-transp.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#39393b8c] text-white"
      id="navbar"
    >
      <div>
        <Link to="home" smooth={true} offset={50} duration={500}>
          <img src={Logo} alt="Logo" style={{ width: "190px" }} />
        </Link>
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="Home" smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="howitworks" smooth={true} offset={50} duration={500}>
            How it works
          </Link>
        </li>
        <li>
          <Link to="aboutus" smooth={true} offset={50} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <a href="tel:615-499-6776">Call Today - 615-499-6776</a>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="Home"
            smooth={true}
            offset={50}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="Howitworks"
            smooth={true}
            offset={50}
            duration={500}
          >
            How it works
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            to="Aboutus"
            smooth={true}
            offset={50}
            duration={500}
          >
            About Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
