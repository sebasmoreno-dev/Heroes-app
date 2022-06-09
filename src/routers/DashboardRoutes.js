import { Route, Routes } from "react-router-dom";
import DcScreen from "../components/dc/DcScreen";
import MarvelScreen from "../components/marvel/MarvelScreen";
import SearchScreen from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";
import HeroScreen from "./../components/hero/HeroScreen";

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-1">
        <Routes>
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="dc" element={<DcScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path="hero" element={<HeroScreen />} />

          <Route path="/" element={<MarvelScreen />} />
        </Routes>

      </div>
    </>
  );
};

export default DashboardRoutes;
