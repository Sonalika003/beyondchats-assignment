import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api/articleApi";

export default function ArticleDetails() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    getArticleById(id).then(res => setArticle(res.data.data));
  }, [id]);

  if (!article) return <p>Loading...</p>;

  return (
    <div>
      <h2>{article.title}</h2>

      <h3>Original Content</h3>
      <p>{article.content}</p>

      <h3>Rewritten Content</h3>
      <p>{article.rewrittenContent || "Not rewritten yet"}</p>

      <h3>References</h3>
      <ul>
        {article.references?.map((ref, i) => (
          <li key={i}>
            <a href={ref} target="_blank">{ref}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
