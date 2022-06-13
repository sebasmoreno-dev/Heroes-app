import { Route, Routes } from "react-router-dom";
import DcPage from "./../auth/pages/DcPage.jsx";
import MarvelPage from "../auth/pages/MarvelPage";
import SearchPage from "../auth/pages/SearchPage";
import { Navbar } from "../auth/components/ui/Navbar";
import { HeroScreen } from "./../auth/components/hero/HeroScreen";

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-1">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hero/:heroeId" element={<HeroScreen />} />

          <Route path="/" element={<MarvelPage />} />
        </Routes>

      </div>
    </>
  );
};

export default DashboardRoutes;
