import { useEffect, useState } from "react";

const FilterBar = ({ onFilter }) => {
  const [category, setCategory] = useState("all");
  const [diet, setDiet] = useState("all");
  const [search, setSearch] = useState("");

  // Automatically filter whenever category, diet, or search changes
  useEffect(() => {
    onFilter({
      category,
      diet,
      name: search,
    });
  }, [category, diet, search, onFilter]);

  const changeCategory = (value) => {
    setCategory(value);
  };

  const changeDiet = (value) => {
    setDiet(value);
  };

  return (
    <div className="filter-container">
      <div className="filter-section">
        <h4>CATEGORY</h4>

        <div className="chips">
          <button
            className={category === "all" ? "active" : ""}
            onClick={() => changeCategory("all")}
          >
            All
          </button>

          <button
            className={category === "starter" ? "active" : ""}
            onClick={() => changeCategory("starter")}
          >
            Starter
          </button>

          <button
            className={category === "main" ? "active" : ""}
            onClick={() => changeCategory("main")}
          >
            Main
          </button>

          <button
            className={category === "sides" ? "active" : ""}
            onClick={() => changeCategory("sides")}
          >
            Sides
          </button>

          <button
            className={category === "desert" ? "active" : ""}
            onClick={() => changeCategory("desert")}
          >
            Dessert
          </button>
        </div>
      </div>

      <div className="filter-section">
        <h4>DIET</h4>

        <div className="chips">
          <button
            className={diet === "all" ? "active" : ""}
            onClick={() => changeDiet("all")}
          >
            All
          </button>

          <button
            className={diet === "veg" ? "active" : ""}
            onClick={() => changeDiet("veg")}
          >
            🌿 Veg
          </button>

          <button
            className={diet === "nonveg" ? "active" : ""}
            onClick={() => changeDiet("nonveg")}
          >
            🍗 Non-Veg
          </button>
        </div>
      </div>

      <div className="search-box">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by food name..."
        />

        {/* Optional: Keep the button only for UI */}
        <button type="button">Search</button>
      </div>
    </div>
  );
};

export default FilterBar;