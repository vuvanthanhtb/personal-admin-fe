import { lazy } from "react";
import { ROOT } from "shared/constants";
import type { IRouteModel } from "../model/route.model";

const permissionRoutes: IRouteModel[] = [
  {
    key: "PermissionPage",
    name: "Quản lý phân quyền",
    title: "Quản lý phân quyền",
    path: "/permission",
    private: true,
    roles: [ROOT],
    component: lazy(() => import("modules/permission/page")),
    childs: []
  },
];

export default permissionRoutes;
