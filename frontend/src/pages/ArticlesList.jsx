import { useEffect, useState } from "react";
import { getArticles } from "../api/articleApi";
import { Link } from "react-router-dom";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then(res => setArticles(res.data.data));
  }, []);

  return (
    <div>
      <h2>Articles</h2>
      {articles.map(article => (
        <div key={article._id}>
          <h4>{article.title}</h4>
          <p>Status: {article.isRewritten ? "Rewritten" : "Pending"}</p>
          <Link to={`/articles/${article._id}`}>View</Link>
        </div>
      ))}
    </div>
  );
}
