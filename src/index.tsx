import ReactDOM from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.render(<App />, rootElement);
} else {
  console.error("Couldn't find root element");
}
