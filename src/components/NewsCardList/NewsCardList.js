import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ items, deleteArticle, saveArticle, bin }) {
  return (
    <div className="newscardlist">
      {items.map((item) => (
        <NewsCard bin={bin} content={item} key={item.link} deleteArticle={deleteArticle} saveArticle={saveArticle}></NewsCard>
      ))}
    </div>
  );
}

export default NewsCardList;
