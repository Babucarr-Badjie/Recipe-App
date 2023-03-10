import { useParams } from "react-router-dom";
import { useFetch } from "../../myHook/useFetch";
import "./Recipe.css";

export default function Recipe() {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { error, isPending, data: recipe } = useFetch(url);

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading data ....</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p className="instruction">{recipe.instruction}</p>
          <br />
          <p>It take {recipe.cookingTime} to cook.</p>
          <ol>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ol>
          <p className="instruction">{recipe.instruction}</p>
        </>
      )}
    </div>
  );
}
