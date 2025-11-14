import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const user = localStorage.getItem("user");
  const isAuthenticated = user ? JSON.parse(user).isAuthenticated : false;

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}

