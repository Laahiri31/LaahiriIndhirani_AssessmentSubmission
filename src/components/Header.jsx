import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useSavedRecipes } from "../context/SavedRecipeContext";

const Header = () => {
  const { user, logout } = useAuth();
  const { savedRecipes } = useSavedRecipes();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <header className="header">
      <div>
        <h1>Party Menu</h1>
        <p>Welcome, {user?.name}</p>
      </div>

      <div className="header-buttons">
        <Link to="/saved-recipes" className="saved-btn">
          Saved Recipes
          <span className="badge">{savedRecipes.length}</span>
        </Link>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;