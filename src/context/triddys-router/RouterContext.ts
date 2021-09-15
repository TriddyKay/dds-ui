import React from "react";
import { Route } from "./RouterProvider";

export type RouterContextType = {
  route: Route,
  setRoute: (route: Route) => void
}

export const RouterContext = React.createContext<RouterContextType>({
  route: Route.HOME,
  setRoute: () => undefined
});
