import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticleById } from "../api/articleApi";

export default function ArticleDetails() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const data = await getArticleById(id);
        setArticle(data);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError("Failed to load article");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) return <p>Loading article...</p>;
  if (error) return <p>{error}</p>;
  if (!article) return <p>Article not found</p>;

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">⬅ Back to Articles</Link>

      <h1>{article.title}</h1>

      <p>
        <strong>Status:</strong>{" "}
        {article.isRewritten ? "Rewritten" : "Pending"}
      </p>

      <hr />

      <h3>Content</h3>
      <p style={{ whiteSpace: "pre-line" }}>
        {article.rewrittenContent || article.content}
      </p>

      {article.references && article.references.length > 0 && (
        <>
          <hr />
          <h3>References</h3>
          <ul>
            {article.references.map((ref, index) => (
              <li key={index}>
                <a href={ref} target="_blank" rel="noreferrer">
                  {ref}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
