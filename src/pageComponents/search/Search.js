import { useLocation } from "react-router-dom";
import { useFetch } from "../../myHook/useFetch";
import RecipeList from "../../components/RecipeList";
import "./Search.css";

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = "http://localhost:3000/recipes?q" + query;

  const { error, isPending, data } = useFetch(url);
  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading data...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
