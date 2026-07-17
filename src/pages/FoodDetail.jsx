import { Link, useParams } from "react-router-dom";
import { useSavedRecipes } from "../context/SavedRecipeContext";
import { getMenuItemById } from "../utils/menuUtils";

import "../styles/detail.css";

const FoodDetail = () => {
  const { id } = useParams();

  const item = getMenuItemById(id);

  const { toggleRecipe, isSaved } = useSavedRecipes();

  if (!item) {
    return (
      <div className="not-found">
        <h2>Food Not Found</h2>
        <Link to="/">Back to Menu</Link>
      </div>
    );
  }

  return (
    <div className="detail-page">

      {/* Top Navigation */}

      <div className="detail-nav">

        <Link to="/" className="back-btn">
          ← Back to Menu
        </Link>

        <div className="top-buttons">

          <Link to="/saved-recipes" className="saved-btn">
            Saved Recipes
          </Link>

          <button
            onClick={() => toggleRecipe(item.id)}
            className={isSaved(item.id) ? "save-btn saved" : "save-btn"}
          >
            {isSaved(item.id) ? "✓ Saved" : "Save Recipe"}
          </button>

        </div>

      </div>

      {/* Image + Details */}

      <div className="detail-top">

        <div className="image-section">

          <img
            src={item.image}
            alt={item.name}
            className="hero-image"
          />

        </div>

        <div className="detail-info">

          <div className="detail-badges">

            <span className="category-badge">
              {item.category}
            </span>

            <span
              className={
                item.isVeg
                  ? "veg-badge"
                  : "nonveg-badge"
              }
            >
              {item.isVeg ? "🌿 Veg" : "🍗 Non-Veg"}
            </span>

          </div>

          <h1>{item.name}</h1>

          <p className="servings">
            {item.servings}
          </p>

          <p className="description">
            {item.fullDescription}
          </p>

        </div>

      </div>

      {/* Ingredients */}

      <div className="ingredients">

        <h2>Ingredients</h2>

        <ul>

          {item.ingredients.map((ingredient, index) => (

            <li key={index}>

              <strong>{ingredient.name}</strong>

              <span>{ingredient.quantity}</span>

            </li>

          ))}

        </ul>

      </div>

    </div>
  );
};

export default FoodDetail;