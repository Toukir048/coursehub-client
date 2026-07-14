import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <Outlet />
    </div>
  );
};

export default MainLayout;