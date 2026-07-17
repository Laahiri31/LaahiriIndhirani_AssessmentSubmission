import { Route, Routes } from "react-router-dom";

import FoodDetail from "./pages/FoodDetail";
import Menu from "./pages/Menu";
import NotFound from "./pages/NotFound";
import SavedRecipes from "./pages/SavedRecipes";
import SignIn from "./pages/SignIn";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

        <Route path="/signin" element={<SignIn />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Menu />
            </ProtectedRoute>
          }
        />

        <Route path="/menu/:id" element={<FoodDetail />} />

        <Route path="/saved-recipes" element={<SavedRecipes />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    );
}


export default App;