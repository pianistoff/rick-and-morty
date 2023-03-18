import ReactDOMClient from "react-dom/client";

import App from "./App";
import "./styles/index.scss";

const rootElement = document.getElementById("root");

if (rootElement != null) {
  const root = ReactDOMClient.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Couldn't find root element");
}
