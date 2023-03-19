import { type FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Character from "./pages/Character";
import Home from "./pages/Home";

const RoutesList: FC = () => {
  return (
    <Routes>
      <Route path="/rick-and-mort/" element={<Home />} />
      <Route path="/rick-and-mort/character/:id" element={<Character />} />
      <Route path="/rick-and-mort/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default RoutesList;
