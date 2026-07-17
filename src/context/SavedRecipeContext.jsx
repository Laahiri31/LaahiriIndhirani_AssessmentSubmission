import { createContext, useContext, useEffect, useState } from "react";
import { getRecipes, saveRecipes } from "../utils/localStorage";

const SavedRecipeContext = createContext();

export const SavedRecipeProvider = ({ children }) => {
  const [savedRecipes, setSavedRecipes] = useState(getRecipes());

  useEffect(() => {
    saveRecipes(savedRecipes);
  }, [savedRecipes]);

  const toggleRecipe = (id) => {
    if (savedRecipes.includes(id)) {
      setSavedRecipes(savedRecipes.filter((item) => item !== id));
    } else {
      setSavedRecipes([...savedRecipes, id]);
    }
  };

  const removeRecipe = (id) => {
    setSavedRecipes(savedRecipes.filter((item) => item !== id));
  };

  const isSaved = (id) => savedRecipes.includes(id);

  return (
    <SavedRecipeContext.Provider
      value={{
        savedRecipes,
        toggleRecipe,
        removeRecipe,
        isSaved,
      }}
    >
      {children}
    </SavedRecipeContext.Provider>
  );
};

export const useSavedRecipes = () => useContext(SavedRecipeContext);