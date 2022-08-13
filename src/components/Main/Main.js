import React from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import newsApi from "../../utils/NewsApi";

function Main(props) {
  const [articles, setArticles] = React.useState({});

  function retrieveArticles(input) {
    newsApi
      .getSearchResults(input)
      .then((res) => setArticles(res.articles))
      .catch((err) => window.alert(`Error loading articles: ${err}`));
  }

  return (
    <main className="main">
      <section className="main__search">
        <div className="main__search-content">
          <h1 className="main__header">What's going on in the world?</h1>
          <p className="main__description">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <SearchForm onSubmit={retrieveArticles} />
        </div>
      </section>
      {articles.length > 0 && (
        <section className="main__results">
          <h2 className="main__results-title">Search Results</h2>
          <NewsCardList
            items={articles}
            deleteArticle={props.deleteArticle}
          ></NewsCardList>
          <button className="main__results-button">Show more</button>
        </section>
      )}
      <About></About>
    </main>
  );
}

export default Main;
