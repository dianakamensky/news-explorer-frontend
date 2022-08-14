import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ items, deleteArticle, saveArticle }) {
  return (
    <div className="newscardlist">
      {items.map((item) => (
        <NewsCard content={item} key={item.link} deleteArticle={deleteArticle} saveArticle={saveArticle}></NewsCard>
      ))}
    </div>
  );
}

export default NewsCardList;
