import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "../pages/home";
import AAInventoryForm from "../pages/spotchecks/aa_inventory";
import SpotCheckForm from "../pages/spotchecks/tempurature";
import ACAInventoryForm from "../pages/spotchecks/aca_inventory";

export default function SiteRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}>
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="/inventory"
          element={<AAInventoryForm />}
        />
        <Route
          path="/aca-inventory"
          element={<ACAInventoryForm />}
        />
        <Route
          path="/temperature"
          element={<SpotCheckForm />}
        />
      </Route>
    </Routes>
  );
}
