import type { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import { ContextProvider } from "./ContextProvider";
import RoutesList from "./RoutesList";

const App: FC = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <RoutesList />
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
