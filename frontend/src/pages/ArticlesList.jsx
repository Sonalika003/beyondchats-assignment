import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../api/articleApi";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getArticles(); 
        setArticles(data);
      } catch (err) {
        console.error("Failed to fetch articles", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading articles...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Articles</h1>

      {articles.map((article) => (
        <div key={article._id} style={{ marginBottom: "20px" }}>
          <h3>{article.title}</h3>
          <p>Status: {article.isRewritten ? "Rewritten" : "Pending"}</p>
          <Link to={`/articles/${article._id}`}>View</Link>
        </div>
      ))}
    </div>
  );
}
