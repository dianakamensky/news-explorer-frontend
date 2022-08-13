import React from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";

function Main(props) {
  const [searchResults, setSearchResults] = React.useState([]);

  return (
    <main className="main">
      <section className="main__search">
        <div section className="main__search-content">
          <h1 className="main__header">What's going on in the world?</h1>
          <p className="main__description">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <SearchForm />
        </div>
      </section>
      {searchResults.length > 0 && (
        <section className="main__results">
          <h2 className="main__results-title"></h2>
          <NewsCardList cards={searchResults}></NewsCardList>
          <button className="main__results-button">Show more</button>
        </section>
      )}
      <About></About>
    </main>
  );
}

export default Main;
