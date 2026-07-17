import { menuData } from "../data/menuData";

export const filterMenuItems = ({
  category = "all",
  diet = "all",
  name = "",
}) => {
  let filtered = [...menuData];

  // Category Filter
  if (category !== "all") {
    filtered = filtered.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Diet Filter
  if (diet === "veg") {
    filtered = filtered.filter((item) => item.isVeg);
  }

  if (diet === "nonveg") {
    filtered = filtered.filter((item) => !item.isVeg);
  }

  // Search Filter
  if (name.trim() !== "") {
    filtered = filtered.filter((item) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  return filtered;
};

export const getMenuItemById = (id) => {
  return menuData.find((item) => item.id == id);
};