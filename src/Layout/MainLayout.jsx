import { Outlet } from "react-router-dom";
// components
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="mb-10">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
