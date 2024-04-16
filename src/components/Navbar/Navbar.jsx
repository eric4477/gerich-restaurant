import "./Navbar.css";
import Headroom from "react-headroom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleClick = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <Headroom className="headroom">
      <nav className={"app__navbar"}>
        <div className="app__navbar-logo">
          <img src={images.gericht} alt="logo" />
        </div>
        <div>
          <ul className="app__navbar-links">
            <li className="p__opensans">
              <a href="#home">Home</a>
            </li>
            <li className="p__opensans">
              <a href="#about">About</a>
            </li>
            <li className="p__opensans">
              <a href="#menu">Menu</a>
            </li>
            <li className="p__opensans">
              <a href="#awards">Awards</a>
            </li>
            <li className="p__opensans">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="app__navbar-login">
          <a href="#login" className="p__opensans">
            Log in / registration
          </a>
          <div />
          <a href="/" className="p__opensans">
            book table
          </a>
        </div>

        <div className="app__navbar-smallscreen">
          <GiHamburgerMenu
            className="overlay__open"
            color="#fff"
            fontSize={27}
            onClick={handleClick}
          />
          {toggleMenu && (
            <div
              className={`app__navbar-smallscreen_overlay flex__center slide-bottom`}
            >
              <MdOutlineRestaurantMenu
                fontSize={27}
                className="overlay__close"
                onClick={handleClick}
              />
              <ul className="app__navbar-smallscreen_links">
                <li className="p__opensans" onClick={handleClick}>
                  <a href="#home">Home</a>
                </li>
                <li className="p__opensans" onClick={handleClick}>
                  <a href="#about">About</a>
                </li>
                <li className="p__opensans" onClick={handleClick}>
                  <a href="#menu">Menu</a>
                </li>
                <li className="p__opensans" onClick={handleClick}>
                  <a href="#awards">Awards</a>
                </li>
                <li className="p__opensans" onClick={handleClick}>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </Headroom>
  );
};

export default Navbar;
