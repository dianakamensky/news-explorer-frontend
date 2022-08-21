import "./NewsCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { SavedCardsContext } from "../../contexts/SavedCardsContext";
import React from "react";

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
    if (bin) return "card__btn_icon_bin";
    return saved ? "card__btn_icon_saved" : "card__btn_icon_save";
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
      <button type="button" className={`card__btn ${icon()}`} onClick={handleClick}>
      </button>
      {!currentUser.email && (<p className="card__btn-message">Sign in to save articles</p>)}
      {bin && (<p className="card__btn-message">Remove from saved</p>)}
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
