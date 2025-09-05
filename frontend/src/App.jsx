import { Loader } from "lucide-react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import { useAuthStore } from "./store/useAuthStore.js";

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log(authUser);

  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
    

  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default App;
