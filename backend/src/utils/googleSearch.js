import axios from "axios";

const SERP_API_URL = "https://serpapi.com/search.json";

export const searchGoogle = async (query) => {
  const response = await axios.get(SERP_API_URL, {
    params: {
      q: query,
      engine: "google",
      api_key: process.env.SERPAPI_KEY,
      num: 5
    }
  });

  const results = response.data.organic_results || [];

  // Filter only external blog/article links
  const links = results
    .map(r => r.link)
    .filter(
      link =>
        link &&
        !link.includes("beyondchats.com") &&
        (link.includes("blog") || link.includes("article"))
    )
    .slice(0, 2);

  return links;
};
