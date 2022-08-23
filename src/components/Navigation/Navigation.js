import "./Navigation.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React from "react";
import { Link } from "react-router-dom";
import logoutBlack from "../../images/logout-black.svg";
import logoutWhite from "../../images/logout-white.svg";

function Navigation({ isMainPage, openPopup, logout, toggleNavPopup }) {
  const currentUser = React.useContext(CurrentUserContext);
  const username = currentUser.name;

  function handleClick(e) {
    e.preventDefault();
    if (username) logout();
    else openPopup(true);
  }

  return (
    <nav
      className={`navbar ${isMainPage ? "navbar_page_main" : "navbar_page_saved"}`}
    >
      <div
        className={`navbar__option ${
          isMainPage ? "navbar__option_decoration_underline" : ""
        } 
         
        `}
        onClick={toggleNavPopup}
      >
        <Link className="navbar__link" to="/">
          Home
        </Link>
      </div>

      {username && (
        <div
          className={`navbar__option ${
            isMainPage ? "" : "navbar__option_decoration_underline"
          }`}
          onClick={toggleNavPopup}
        >
          <Link className="navbar__link" to="/saved-news">
            Saved articles
          </Link>
        </div>
      )}

      <div className="navbar__option" onClick={toggleNavPopup}>
        <button
          className="navbar__link"
          onClick={handleClick}
        >{`${username || "Sign in"}`}</button>
        {currentUser.email && !isMainPage && (
          <img className="navbar__logout" src={logoutBlack} alt="Logout"></img>
        )}
        {currentUser.email && isMainPage && (
          <img className="navbar__logout" src={logoutWhite} alt="Logout"></img>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
