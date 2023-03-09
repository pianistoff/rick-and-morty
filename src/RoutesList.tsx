import { type FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Character from "./pages/Character";
import Home from "./pages/Home";

const RoutesList: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character/:id" element={<Character />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default RoutesList;
