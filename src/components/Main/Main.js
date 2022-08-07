import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="main__search">
        <h1 className="main__header">What's going on in the world?</h1>
        <p className="main__description">
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <SearchForm />
      </section>
      <section className="main__results"></section>
      <section className="main__author">
        <img className="main__author-image"></img>
        <h2 className="main__author-title">About the author</h2>
        <p className="main__author-about"></p>
      </section>
    </main>
  );
}

export default Main;
