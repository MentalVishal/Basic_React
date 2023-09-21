import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { SinglePage } from "./SinglePage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character/:id" element={<SinglePage />} />
    </Routes>
  );
};
