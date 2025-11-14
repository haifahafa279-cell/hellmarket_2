import { Navigate } from "react-router-dom";

export function AdminProtectedRoute({ children }) {
  const admin = localStorage.getItem("admin");
  const isAuthenticated = admin ? JSON.parse(admin).isAuthenticated : false;

  if (!isAuthenticated) {
    return <Navigate to="/admin-panel/login" replace />;
  }

  return children;
}

