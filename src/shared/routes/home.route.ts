import { lazy } from "react";
import type { IRouteModel } from "../model/route.model";
import { ROOT } from "..";

const homeRoutes: IRouteModel[] = [
  {
    name: "HomePage",
    title: "",
    path: "/",
    private: true,
    component: lazy(() => import("modules/home/page")),
    roles: [ROOT],
  },
];

export default homeRoutes;
