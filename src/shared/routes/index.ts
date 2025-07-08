import { lazy } from "react";
import authRoutes from "./auth.route";
import type { IRouteModel } from "../model/route.model";
import homeRoutes from "./home.route";
import calendarRoutes from "./calendar.route";
import permissionRoutes from "./permission.route";
import userRoutes from "./user.route";
import aiRoutes from "./ai.route";

const routes: IRouteModel[] = [
  {
    name: "NotFoundPage",
    title: "Personnal Admin - Not Found",
    path: "*",
    private: false,
    component: lazy(() => import("shared/pages/not-found")),
  },
  ...homeRoutes,
  ...authRoutes,
  ...calendarRoutes,
  ...permissionRoutes,
  ...userRoutes,
  ...aiRoutes
];

export default routes;
