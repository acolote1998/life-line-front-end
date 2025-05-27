import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./css/global.css";
import Providers from "./Providers";

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <Providers />
    </StrictMode>
  );
}
