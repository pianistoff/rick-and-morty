import { GoogleOAuthProvider } from "@react-oauth/google";
import type { FC } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import RoutesList from "./RoutesList";

const App: FC = () => {
  return (
    <GoogleOAuthProvider clientId="222307749263-4lphd64inlbpdgmlqci26eotari1vufk.apps.googleusercontent.com">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <RoutesList />
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
