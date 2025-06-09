import { lazy } from "react";
import { ROOT } from "shared/constants";
import type { IRouteModel } from "../model/route.model";

const userRoutes: IRouteModel[] = [
  {
    key: "UserPage",
    name: "Danh sách tài khoản",
    title: "Danh sách tài khoản",
    path: "/user",
    private: true,
    roles: [ROOT],
    component: lazy(() => import("modules/user/page")),
    childs: []
  },
];

export default userRoutes;
