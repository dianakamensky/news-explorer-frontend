import "./Navigation.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React from "react";
import Api from "../../utils/api";
import { Link } from "react-router-dom";

function Navigation({ isMainPage, openPopup, logout, toggleNavPopup }) {
  const currentUser = React.useContext(CurrentUserContext);
  const username = currentUser.name;

  function handleClick(e) {
    e.preventDefault();
    if (username) logout();
    else openPopup(true);
  }

  return (
    <nav className={`navbar ${isMainPage ? "navbar_main" : "navbar_saved"}`}>
      <div
        className={`navbar__option ${
          isMainPage ? "navbar__option_current" : ""
        } 
         
        `} onClick={toggleNavPopup}
      >
        <Link className="navbar__link" to="/">
          Home
        </Link>
      </div>

      {username && (
        <div
          className={`navbar__option ${
            isMainPage ? "" : "navbar__option_current"
          }`} onClick={toggleNavPopup}
        >
          <Link className="navbar__link"  to="/saved-news">
            Saved articles
          </Link>
        </div>
      )}

      <div className="navbar__option" onClick={toggleNavPopup}>
        <button
          className={`navbar__link ${username && "navbar__link_loggedIn"}`}
          onClick={handleClick}
        >{`${username || "Sign in"}`}</button>
      </div>
    </nav>
  );
}

export default Navigation;
