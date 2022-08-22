import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ items, deleteArticle, saveArticle, bin, openPopup }) {
  return (
    <div className="newscardlist">
      {items.map((item) => (
        <NewsCard bin={bin} content={item} key={item.link} deleteArticle={deleteArticle} openPopup={openPopup} saveArticle={saveArticle}></NewsCard>
      ))}
    </div>
  );
}

export default NewsCardList;
