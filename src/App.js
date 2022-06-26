import React from "react";
import { Route, Routes } from "react-router-dom";
import CommonLayout from "./components/CommonLayout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <CommonLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </CommonLayout>
  );
}

export default App;
