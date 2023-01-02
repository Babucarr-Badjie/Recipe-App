import { Link } from "react-router-dom";
import "./RecipeList.css";

export default function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
              <h3>{recipe.title}</h3>
              <p>{ recipe.description.substring(0, 125)}...</p>
              <p>{recipe.cookingTime} to make</p>
              <div>{recipe.instruction.substring(0, 100)}...</div>
              <Link to={`/recipe/${recipe.id}`}>Try this amazing recipe</Link>
        </div>
      ))}
    </div>
  );
}
