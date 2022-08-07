function Navigation(isMainPage, isLoggedIn, username) {
  return (
    <nav className={`navbar ${isMainPage ? "navbar_main" : "navbar_saved"}`}>
      <a className="navbar__link" href="">
        Home
      </a>
      {isLoggedIn && (
        <a className="navbar__link" href="">
          Saved articles
        </a>
      )}
      <a
        className={`navbar__link ${isLoggedIn && "navbar__link_loggedIn"}`}
        href=""
      >{`${isLoggedIn ? username : "Sign in"}`}</a>
    </nav>
  );
}
