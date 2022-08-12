import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ items }) {
  return (
    <div class="newscardlist">
      {items.map((item) => (
        <NewsCard content={item}></NewsCard>
      ))}
    </div>
  );
}

export default NewsCardList;
