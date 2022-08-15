import { Link } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { useLocation } from "react-router-dom";
import React from "react";

function Header({ openPopup, logout, toggleOverlay }) {
  const location = useLocation();
  const [navPopupOpen, setNavPopupOpen] = React.useState(false);

  function toggleNavPopup(e) {
    e.preventDefault();
    setNavPopupOpen(!navPopupOpen);
    toggleOverlay(!navPopupOpen);
  }

  return (
    
    <header
      className={`header ${
        location.pathname === "/saved-news" && "header_saved-news"
      } ${navPopupOpen && "header_popup"}`}
    >
      <Link className="header__logo" to="/">
        NewsExplorer
      </Link>
      <Navigation
        isMainPage={location.pathname === "/"}
        openPopup={openPopup}
        logout={logout}
        navPopupOpen={navPopupOpen}
        toggleNavPopup={toggleNavPopup}
      ></Navigation>
       <button
        className={`header__nav-btn`}
        type="button"
        onClick={toggleNavPopup}
      ></button>
    </header>
    
  );
}

export default Header;
