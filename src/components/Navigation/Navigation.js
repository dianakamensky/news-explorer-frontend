import "./Navigation.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import React from "react";

function Navigation({ isMainPage }) {
  const username = React.useContext(CurrentUserContext).name;

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
        >{`${username || "Sign in"}`}</a>
      </div>
    </nav>
  );
}

export default Navigation;
