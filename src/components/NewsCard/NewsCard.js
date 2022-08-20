import "./NewsCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { SavedCardsContext } from "../../contexts/SavedCardsContext";
import React from "react";
import Bin from "../../images/trash.svg";
import Saved from "../../images/saved.svg";
import Save from "../../images/save.svg";

function NewsCard({ content, deleteArticle, saveArticle, bin }) {
  const savedCards = React.useContext(SavedCardsContext);
  const date = new Date(content.date).toLocaleDateString(undefined, {weekday: undefined, month: 'long', day: 'numeric', year: 'numeric'});
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(updateSaved, [savedCards, content.link]);

  const [saved, setSaved] = React.useState(null);

  function updateSaved() {
    setSaved(savedCards.find((card) => card.link === content.link));
  }

  function icon() {
    if (bin) return Bin;
    return saved ? Saved : Save;
  }

  function alt() {
    if (bin) return "Delete article";
    return saved ? "Unsave article" : "Save article";
  }

  function handleClick(e) {

    if (bin || saved) {
      deleteArticle(saved._id);
    }
    else {
    saveArticle(content);
    }
  }

  return (
    <article className="card">
      <img
        className="card__image"
        src={content.image}
        alt={content.title}
      ></img>
      {bin && <p className="card__keyword">{content.keyword}</p>}
      <button type="button" className="card__btn" onClick={handleClick}>
        <img className="card__btn-icon" src={icon()} alt={alt()}></img>
      </button>
      {!currentUser.email && (<p className="card__btn-message">Sign in to save articles</p>)}
      <div className="card__text">
        <p className="card__date">{date}</p>
        <h3 className="card__title"><a href={content.link}>{content.title}</a></h3>
        <p className="card__description">{content.text}</p>
        <p className="card__source">
          {content.source}
        </p>
      </div>
    </article>
  );
}

export default NewsCard;
