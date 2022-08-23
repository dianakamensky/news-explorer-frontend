import "./Footer.css";
import GitHub from "../../images/github.svg";
import Facebook from "../../images/facebook.svg";

function Footer(props) {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2021 Supersite, Powered by News API</p>
      <nav className="footer__nav">
        <a href="/" className="footer__nav-link">
          Home
        </a>
        <a href="https://www.practicum100.org/" className="footer__nav-link" target="_blank" rel="noopener noreferrer">
          Practicum by Yandex
        </a>
        <div className="footer__nav-icons">
          <a href="https://github.com/" className="footer__nav-link" target="_blank" rel="noopener noreferrer">
            <img src={GitHub} alt="Github"></img>
          </a>
          <a href="https://www.facebook.com/" className="footer__nav-link" target="_blank" rel="noopener noreferrer">
            <img src={Facebook} alt="Facebook"></img>
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
