import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "../pages/home";
import ResentmentsForm from "../pages/resentments/resentmentForm";
import SpotCheckForm from "../pages/principles/principles-form";
import Stories from "@/pages/literature/stories";
import TheSteps from "@/pages/steps/the-steps";
import AcaTenthStep from "@/pages/acaTenthStep/aca-tenth-step-page";
import SerenityCheckIn from "@/pages/serenityCheckIn/serenityCheckInPage";

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
          element={<ResentmentsForm />}
        />
        <Route
          path="/aca-tenth-step"
          element={<AcaTenthStep />}
        />
        <Route
          path="/principles"
          element={<SpotCheckForm />}
        />
        <Route
          path="/serenity"
          element={<SerenityCheckIn />}
        />
        <Route
          path="/Literature"
          element={<Stories />}
        />
        <Route
          path="/steps"
          element={<TheSteps />}
        />
      </Route>
    </Routes>
  );
}
