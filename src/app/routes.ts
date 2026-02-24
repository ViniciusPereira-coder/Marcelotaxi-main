import { createBrowserRouter } from "react-router";
import { Root } from "./layout/Root";
import { Home } from "./pages/Home";
import { Transfers } from "./pages/Transfers";
import { Fleet } from "./pages/Fleet";
import { Onboard } from "./pages/Onboard";
import { About } from "./pages/About";
import { Reviews } from "./pages/Reviews";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "transfers", Component: Transfers },
      { path: "fleet", Component: Fleet },
      { path: "onboard", Component: Onboard },
      { path: "about", Component: About },
      { path: "reviews", Component: Reviews },
      { path: "contact", Component: Contact },
    ],
  },
]);
