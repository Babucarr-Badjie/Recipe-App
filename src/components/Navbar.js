import { Link } from "react-router-dom";
import "./Navbar.css";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="nav-link">
          <h1>Cooking Recipes</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Create a new Recipe</Link>
      </nav>
    </div>
  );
}
