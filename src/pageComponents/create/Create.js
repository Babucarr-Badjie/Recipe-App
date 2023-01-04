import { useRef, useState } from "react";
import { useFetch } from "../../myHook/useFetch";
import "./Create.css";

export default function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instruction, setInstruction] = useState("");
  const [cookingTime, setCookingTime] = useState("");

  // useFetch
  const [postData, data, error] = useFetch(
    "http://localhost:3000/recipes",
    "POST"
  );

  // adding Ref
  const ingredientInput = useRef(null);

  // ingredients useState
  const [newIngedient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);

  // handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    postData({
      title,
      description,
      ingredients,
      instruction,
      cookingTime: cookingTime + "minutes",
    });
    // console.log(title, description, instruction, cookingTime, ingredients);
  };

  // handle Add new Ingredient
  const handleAddIngredient = (e) => {
    e.preventDefault();
    const ing = newIngedient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((preIngredients) => [...preIngredients, newIngedient]);
    }
    // clear the ingredients input field to add new ingredients
    setNewIngredient("");

    // add focus
    ingredientInput.current.focus();
  };

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>

      <form onSubmit={handleSubmit}>
        {/* Recipe title input */}
        <label>
          <span>Recipe title: </span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        {/* Recipe description input */}
        <label>
          <span>Recipe description: </span>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          />
        </label>

        {/* Recipe ingredients input */}
        <label>
          <span>Recipe ingredients: </span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngedient}
              ref={ingredientInput}
            />
            <button onClick={handleAddIngredient} className="btn">
              add
            </button>
          </div>
        </label>

        {/* output the added ingredients */}
        <p>
          Added ingredients:
          {ingredients.map((ingredient) => (
            <em key={ingredient}>{ingredient}, </em>
          ))}{" "}
        </p>

        {/* Recipe instruction */}
        <label>
          <span>Recipe instruction: </span>
          <textarea
            onChange={(e) => setInstruction(e.target.value)}
            value={instruction}
            required
          />
        </label>

        {/* Recipe cooking time */}
        <label>
          <span>Recipe cooking Time (minutes): </span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button className="button">Submit</button>
      </form>
    </div>
  );
}
