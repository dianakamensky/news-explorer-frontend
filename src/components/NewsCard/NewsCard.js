function NewsCard({ card }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isSaved = card.saves.some((user) => user === currentUser._id);

  return (
    <article className="card">
      <img className="card__image" src={card.link} alt={card.name}></img>
      {isOwn && <p className="card__keyword"></p>}
      <button
        type="button"
        className={`card__btn ${isOwn ? "card__btn_delete" : "card__btn_save"}`}
      ></button>
    </article>
  );
}
