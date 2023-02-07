
import { createRoot } from "react-dom/client";


import Navigation from "./components/Navigation";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <Navigation />
);
