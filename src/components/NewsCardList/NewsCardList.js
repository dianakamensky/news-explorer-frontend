import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ items }) {
  return (
    <div className="newscardlist">
      {items.map((item) => (
        <NewsCard content={item} key={item.url}></NewsCard>
      ))}
    </div>
  );
}

export default NewsCardList;
