import React from "react";
import { createBrowserRouter } from "react-router";
import { Root } from "./layout/Root";

const loadHome = () => import("./pages/Home");
const loadTransfers = () => import("./pages/Transfers");
const loadFleet = () => import("./pages/Fleet");
const loadOnboard = () => import("./pages/Onboard");
const loadAbout = () => import("./pages/About");
const loadContact = () => import("./pages/Contact");
const loadEvents = () => import("./pages/Events");

const Home = React.lazy(() => loadHome().then((m) => ({ default: m.Home })));
const Transfers = React.lazy(() => loadTransfers().then((m) => ({ default: m.Transfers })));
const Fleet = React.lazy(() => loadFleet().then((m) => ({ default: m.Fleet })));
const Onboard = React.lazy(() => loadOnboard().then((m) => ({ default: m.Onboard })));
const About = React.lazy(() => loadAbout().then((m) => ({ default: m.About })));
const Contact = React.lazy(() => loadContact().then((m) => ({ default: m.Contact })));
const Events = React.lazy(() => loadEvents().then((m) => ({ default: m.Events })));

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
      { path: "contact", Component: Contact },
      { path: "eventos", Component: Events },
      { path: "events", Component: Events },
    ],
  },
]);

const routePreloaders = [
  loadTransfers,
  loadFleet,
  loadOnboard,
  loadAbout,
  loadContact,
  loadEvents,
];

export function preloadRouteChunks() {
  routePreloaders.forEach((loader) => {
    void loader();
  });
}
