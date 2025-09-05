import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore.js";

export default function PublicRoute({ children }) {
  const { authUser } = useAuthStore();

  if (authUser) {
    // kalau sudah login, jangan biarkan buka login/signup
    return <Navigate to="/" replace />;
  }

  return children;
}
