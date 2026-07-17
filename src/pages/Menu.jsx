import { useCallback, useState } from "react";

import FilterBar from "../components/FilterBar";
import FoodCard from "../components/FoodCard";
import Header from "../components/Header";

import { menuData } from "../data/menuData";
import { filterMenuItems } from "../utils/menuUtils";

import "../styles/menu.css";

const Menu = () => {

  const [foods, setFoods] = useState(menuData);

  const handleFilter = useCallback((filters) => {
  const filtered = filterMenuItems(filters);
  setFoods(filtered);
}, []);

  return (
    <div className="menu-page">

      <Header />

      <FilterBar
        onFilter={handleFilter}
      />

      <p className="count">
        {foods.length} items found
      </p>

      {foods.length === 0 ? (
        <div className="empty-state">

          <h2>No dishes found.</h2>

          <p>Try different filters.</p>

        </div>
      ) : (

        <div className="food-grid">

          {foods.map((item)=>(
            <FoodCard
              key={item.id}
              item={item}
            />
          ))} 

        </div>

      )}

    </div>
  );
};

export default Menu;