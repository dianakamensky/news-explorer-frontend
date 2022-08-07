import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" src={props.img} alt={props.alt}>
        <Link to="/"></Link>
      </img>
    </header>
  );
}
