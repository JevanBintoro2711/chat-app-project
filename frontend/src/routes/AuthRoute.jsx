import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";

export default function ProtectedRoute({ children }) {
  const { authUser } = useAuthStore();

  if (!authUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
