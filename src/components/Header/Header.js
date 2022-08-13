import { Link } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { useLocation } from "react-router-dom";

function Header({ openPopup, logout }) {
  const location = useLocation();

  return (
    <header
      className={`header ${
        location.pathname === "/saved-news" && "header_saved-news"
      }`}
    >
      <Link className="header__logo" to="/">
        NewsExplorer
      </Link>
      <Navigation
        isMainPage={location.pathname === "/"}
        openPopup={openPopup}
        logout={logout}
      ></Navigation>
    </header>
  );
}

export default Header;
