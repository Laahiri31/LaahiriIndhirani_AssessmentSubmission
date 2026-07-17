import { createContext, useContext, useState } from "react";
import { login } from "../services/authService";
import {
  getToken,
  getUser,
  removeToken,
  removeUser,
  saveToken,
  saveUser,
} from "../utils/localStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(getUser());

  const signIn = async (email, password) => {
    const response = await login(email, password);

    if (response.success) {
      saveToken(response.data.token);
      saveUser(response.data.user);

      setToken(response.data.token);
      setUser(response.data.user);
    }

    return response;
  };

  const logout = () => {
    removeToken();
    removeUser();

    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        signIn,
        logout,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);