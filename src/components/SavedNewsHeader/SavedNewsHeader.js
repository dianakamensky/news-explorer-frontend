import React from "react";
import "./SavedNewsHeader.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { SavedCardsContext } from "../../contexts/SavedCardsContext";

function SavedNewsHeader() {
  const username = React.useContext(CurrentUserContext).name;
  const savedCards = React.useContext(SavedCardsContext);
  const amountOfArticles = savedCards.length;

  const keywords = {};

  savedCards.forEach((card) => {
    keywords[card.keyword] ||= 0;
    keywords[card.keyword]++;
  });

  const sortedKeywords = Object.keys(keywords).sort(
    (a, b) => keywords[a] - keywords[b]
  );

  const keywordString =
    sortedKeywords.length > 3
      ? `${sortedKeywords[0]}, ${sortedKeywords[1]} and ${
          sortedKeywords.length - 2
        } others`
      : sortedKeywords.join(", ");

  return (
    <div className="saved-news-header">
      <h1 className="saved-news-header__title">Saved articles</h1>
      <h2 className="saved-news-header__subtitle">{`${username}, you have ${amountOfArticles} saved ${
        amountOfArticles === 1 ? "article" : "articles"
      }`}</h2>
      <p className="saved-news-header__keywords">
        By keywords: {keywordString}
      </p>
    </div>
  );
}

export default SavedNewsHeader;
