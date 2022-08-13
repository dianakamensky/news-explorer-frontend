import "./Navigation.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React from "react";
import Api from "../../utils/api";

function Navigation({ isMainPage, openPopup, logout }) {
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
        }`}
      >
        <a className="navbar__link" href="/">
          Home
        </a>
      </div>

      {username && (
        <div
          className={`navbar__option ${
            isMainPage ? "" : "navbar__option_current"
          }`}
        >
          <a className="navbar__link" href="/saved-news">
            Saved articles
          </a>
        </div>
      )}

      <div className="navbar__option">
        <a
          className={`navbar__link ${username && "navbar__link_loggedIn"}`}
          href=""
          onClick={handleClick}
        >{`${username || "Sign in"}`}</a>
      </div>
      <button className="navbar__btn" type="button"></button>
    </nav>
  );
}

export default Navigation;
