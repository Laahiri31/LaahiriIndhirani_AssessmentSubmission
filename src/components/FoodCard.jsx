import { Link } from "react-router-dom";

const FoodCard = ({ item }) => {
  return (
    <Link to={`/menu/${item.id}`} className="food-card">
      <div className="image-container">
        <img src={item.image} alt={item.name} />

        <span className={item.isVeg ? "veg" : "nonveg"}>
          {item.isVeg ? "VEG" : "NON-VEG"}
        </span>
      </div>

      <div className="food-content">
        <small>{item.category.toUpperCase()}</small>

        <h3>{item.name}</h3>

        <p>{item.description}</p>

        <span>{item.servings}</span>
      </div>
    </Link>
  );
};

export default FoodCard;

