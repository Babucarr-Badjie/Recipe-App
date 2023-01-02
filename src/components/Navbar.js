import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="nav-link">
          <h1>Cooking Recipe</h1>
        </Link>
        <Link to="/create">Create a new Recipe</Link>
      </nav>
    </div>
  );
}
