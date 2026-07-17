import { Link } from "react-router-dom";

import { useSavedRecipes } from "../context/SavedRecipeContext";
import { menuData } from "../data/menuData";

import "../styles/saved.css";

const SavedRecipes = () => {
  const { savedRecipes, removeRecipe } = useSavedRecipes();

  const savedItems = menuData.filter((item) =>
    savedRecipes.includes(item.id)
  );

  return (
    <div className="saved-page">

      <div className="saved-header">

        <div>
          <h1>Saved Recipes</h1>

          <p>{savedItems.length} recipes saved</p>
        </div>

        <Link
          to="/"
          className="back-btn"
        >
          ← Back to Menu
        </Link>

      </div>

      {savedItems.length === 0 ? (

        <div className="empty-page">

  <p>No saved recipes yet.</p>

  <Link
    to="/"
    className="browse-link"
  >
    Browse the menu
  </Link>

</div>

      ) : (

        <div className="saved-grid">

          {savedItems.map((item) => (

            <div
              key={item.id}
              className="saved-card"
            >

              <Link to={`/menu/${item.id}`}>

                <div className="image-container">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <span
                    className={
                      item.isVeg
                        ? "veg-badge"
                        : "nonveg-badge"
                    }
                  >
                    {item.isVeg ? "VEG" : "NON-VEG"}
                  </span>

                </div>

              </Link>

              <div className="saved-content">

                <small>
                  {item.category.toUpperCase()}
                </small>

                <h3>{item.name}</h3>

                <p>{item.description}</p>

                <span>{item.servings}</span>

                <button
                  className="remove-btn"
                  onClick={() => removeRecipe(item.id)}
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default SavedRecipes;