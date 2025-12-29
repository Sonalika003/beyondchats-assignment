import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlesList from "./pages/ArticlesList";
import ArticleDetails from "./pages/ArticleDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles/:id" element={<ArticleDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
