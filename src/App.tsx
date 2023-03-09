import type { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import RoutesList from "./RoutesList";

const App: FC = () => {
  return (
    <BrowserRouter>
      <RoutesList />
    </BrowserRouter>
  );
};

export default App;
