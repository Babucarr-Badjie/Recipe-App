import { Link } from "react-router-dom";
import "./RecipeList.css";

export default function RecipeList({ recipes }) {
  // check if the search recipe is available or not
  if (recipes.length === 0) {
    return <div className="reeor">No recipes to load....</div>;
  }
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <h3>{recipe.title}</h3>
          <p>{recipe.description.substring(0, 100)}...</p>
          <p>{recipe.cookingTime} to make</p>
          <div>{recipe.instruction.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`} className="link">
            Try this amazing recipe
          </Link>
        </div>
      ))}
    </div>
  );
}
