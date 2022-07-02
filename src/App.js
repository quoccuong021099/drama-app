import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutWithSidebar from "./components/CommonLayout/LayoutWithSidebar";
import HomePage from "./pages/HomePage";
import PersonalWall from "./pages/PersonalWall";
import "../src/assets/css/styles.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LayoutWithSidebar>
            <HomePage />
          </LayoutWithSidebar>
        }
      />
      <Route path="/:id" element={<PersonalWall />} />
    </Routes>
  );
}

export default App;
