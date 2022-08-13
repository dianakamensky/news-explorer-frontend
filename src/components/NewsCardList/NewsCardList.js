import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ items, deleteArticle, saveArticle, keyword }) {
  return (
    <div className="newscardlist">
      {items.map((item) => (
        <NewsCard content={item} key={item.url} deleteArticle={deleteArticle} saveArticle={saveArticle} keyword={keyword}></NewsCard>
      ))}
    </div>
  );
}

export default NewsCardList;
