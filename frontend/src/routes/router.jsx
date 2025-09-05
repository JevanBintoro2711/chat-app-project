import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import HomePage from "./../pages/HomePage.jsx";
import LoginPage from "./../pages/LoginPage";
import ProfilePage from "./../pages/ProfilePage";
import SettingsPage from "./../pages/SettingsPage";
import SignUpPage from "./../pages/SignUpPage";
import ProtectedRoute from "./AuthRoute.jsx";
import PublicRoute from "./PublicRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App jadi layout utama
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/signup",
        element: (
          <PublicRoute>
            <SignUpPage />
          </PublicRoute>
        ),
        children: [],
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        ),
        children: [],
      },
      {
        path: "/settings",
        element: <SettingsPage />,
        children: [],
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
        children: [],
      },
    ],
  },
]);

export default router;
