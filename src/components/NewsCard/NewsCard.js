import "./NewsCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { SavedCardsContext } from "../../contexts/SavedCardsContext";
import React from "react";
import Bin from "../../images/trash.svg";
import Saved from "../../images/saved.svg";
import Save from "../../images/save.svg";

function NewsCard({ content, deleteArticle, saveArticle }) {
  const savedCards = React.useContext(SavedCardsContext);
  const isOwn = content.owner;

  React.useEffect(updateSaved, [savedCards]);

  const [saved, setSaved] = React.useState(null);

  function updateSaved() {
    setSaved(savedCards.find((card) => card.link === content.link));
  }

  function icon() {
    if (isOwn) return Bin;
    return saved ? Saved : Save;
  }

  function handleClick(e) {
    if (isOwn || saved) {
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
      {isOwn && <p className="card__keyword">{content.keyword}</p>}
      <button type="button" className="card__btn" onClick={handleClick}>
        <img className="card__btn-icon" src={icon()}></img>
      </button>
      <div className="card__text">
        <p className="card__date">{content.date}</p>
        <h3 className="card__title">{content.title}</h3>
        <p className="card__description">{content.text}</p>
        <p className="card__source">
          {content.source}
        </p>
      </div>
    </article>
  );
}

export default NewsCard;
