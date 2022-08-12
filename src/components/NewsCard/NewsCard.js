import "./NewsCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { SavedCardsContext } from "../../contexts/SavedCardsContext";
import React from "react";
import Bin from "../../images/trash.svg";
import Saved from "../../images/saved.svg";
import Save from "../../images/save.svg";

function NewsCard({ content }) {
  const currentUser = React.useContext(CurrentUserContext);
  const savedCards = React.useContext(SavedCardsContext);
  const isOwn = content.owner;

  function icon() {
    if (isOwn) return Bin;
    if (savedCards.some((card) => card.link === content.url)) return Saved;
    return Save;
  }

  return (
    <article className="card">
      <img
        className="card__image"
        src={content.urlToImage || content.image}
        alt={content.title}
      ></img>
      {isOwn && <p className="card__keyword">{content.keyword}</p>}
      <button type="button" className="card__btn">
        <img className="card__btn-icon" src={icon()}></img>
      </button>
      <div className="card__text">
      <p className="card__date">{content.publishedAt || content.date}</p>
      <h3 className="card__title">{content.title}</h3>
      <p className="card__description">{content.text || content.content}</p>
      <p className="card__source">
        {isOwn ? content.source : content.source.name}
      </p>
      </div>
    </article>
  );
}

export default NewsCard;
