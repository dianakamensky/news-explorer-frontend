function SavedNewsHeader(props) {
  return (
    <div className="saved-news-header">
      <h1 className="saved-news-header__title">Saved articles</h1>
      <h2 className="saved-news-header__subtitle">{`${username}, you have ${amountofarticles} saved articles`}</h2>
      <p className="saved-news-header__keywords">
        By keywords: {`${keywords}`}
      </p>
    </div>
  );
}
