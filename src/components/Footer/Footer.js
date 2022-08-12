import "./Footer.css";

function Footer(props) {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2021 Supersite, Powered by News API</p>
      <nav className="footer__nav">
        <a href="" className="footer__nav-link">
          Home
        </a>
        <a href="" className="footer__nav-link">
          Practicum by Yandex
        </a>
        <div className="footer__nav-icons">
          <a href="" className="footer__nav-link">
            <img src=""></img>
          </a>
          <a href="" className="footer__nav-link">
            <img src=""></img>
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
