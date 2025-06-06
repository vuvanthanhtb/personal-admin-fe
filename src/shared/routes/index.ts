import { lazy } from "react";
import todoRoutes from "./todo.route";
import authRoutes from "./auth.route";
import type { IRouteModel } from "../model/route.model";
import homeRoutes from "./home.route";

const routes: IRouteModel[] = [
  {
    name: "NotFoundPage",
    title: "Personnal Admin - Not Found",
    path: "*",
    private: false,
    component: lazy(() => import("shared/pages/not-found")),
  },
  ...homeRoutes,
  ...todoRoutes,
  ...authRoutes,
];

export default routes;
