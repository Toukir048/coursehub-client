import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <Navbar />

      <Outlet />
    </div>
  );
};

export default MainLayout;