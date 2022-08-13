import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ items, deleteArticle }) {
  return (
    <div className="newscardlist">
      {items.map((item) => (
        <NewsCard content={item} key={item.url} deleteArticle={deleteArticle}></NewsCard>
      ))}
    </div>
  );
}

export default NewsCardList;
