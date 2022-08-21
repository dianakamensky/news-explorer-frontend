import React from "react";
import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import newsApi from "../../utils/NewsApi";
import "../Preloader/Preloader.css";
import noResults from "../../images/no-results.svg";

let currentPage;
let currentInput;

function Main(props) {
  const [articles, setArticles] = React.useState(null);
  const [preloader, setPreloader] = React.useState(false);
  const [wrongRequest, setWrongRequest] = React.useState(null);
  const [showMore, setShowMore] = React.useState(true);
  React.useEffect(() => {
    setArticles(JSON.parse(localStorage.getItem("articles")));
  }, []);

  function convertArticles(content, keyword) {
    return {
      keyword,
      source: content.source.name,
      title: content.title,
      text: content.description,
      date: content.publishedAt,
      link: content.url,
      image: content.urlToImage,
    };
  }

  function updateArticles(newArticles, oldArticles = articles) {
    currentPage++;
    if (newArticles.length < 3) {
      setShowMore(false);
    } else setShowMore(true);
    const updatedArticles = [
      ...oldArticles,
      ...newArticles.map((article) => convertArticles(article, currentInput)),
    ];
    localStorage.setItem("articles", JSON.stringify(updatedArticles));
    setArticles(updatedArticles);
  }

  function retrieveArticles(input) {
    currentPage = 1;
    currentInput = input;
    setArticles([]);
    setPreloader(true);
    newsApi
      .getSearchResults(input)
      .then((res) => {
        setWrongRequest(false);
        setPreloader(false);
        updateArticles(res.articles, []);
      })
      .catch((err) =>{
        setPreloader(false);
        setWrongRequest(
          "Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later."
        )}
      );
  }

  function getMoreArticles() {
    newsApi
      .getSearchResults(currentInput, currentPage)
      .then((res) => {
        updateArticles(res.articles);
      })
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
      {articles && (
        <section className="main__results">
          {preloader && <div className="circle-preloader"></div>}
          {preloader && (
            <p className="main__results-message">Searching for news...</p>
          )}
          {!preloader && articles.length > 0 && (
            <h2 className="main__results-title">Search Results</h2>
          )}
          {articles.length > 0 ? (
            <NewsCardList
              items={articles}
              deleteArticle={props.deleteArticle}
              saveArticle={props.saveArticle}
              bin={false}
            ></NewsCardList>
          ) : (
            !preloader && (
              <div className="main__no-results">
                <img className="main__no-results-image" src={noResults} alt="Sad face"></img>
                <p className="main__no-results-title">Nothing found</p>
                <p className="main__results-message">
                  Sorry, but nothing matched your search terms.
                </p>
              </div>
            ))}
            {!preloader && wrongRequest && 
            (<p className="main__results-message">{wrongRequest}</p>)}
          {showMore && !preloader && currentInput && (
            <button className="main__results-button" onClick={getMoreArticles}>
              Show more
            </button>
          )}
        </section>
      )}

      <About></About>
    </main>
  );
}

export default Main;
