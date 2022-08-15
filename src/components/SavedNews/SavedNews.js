import React from "react";
import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";
import { SavedCardsContext } from "../../contexts/SavedCardsContext";

function SavedNews(props) {
  const savedCards = React.useContext(SavedCardsContext);

  return (
    <main className="saved-news">
      <SavedNewsHeader></SavedNewsHeader>
      <section className="saved-news__card-section">
        <NewsCardList
          items={savedCards}
          deleteArticle={props.deleteArticle}
          bin={true}
        ></NewsCardList>
      </section>
    </main>
  );
}

export default SavedNews;
