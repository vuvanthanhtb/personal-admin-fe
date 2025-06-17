import { lazy } from "react";
import { ROOT } from "shared/constants";
import type { IRouteModel } from "../model/route.model";

const permissionRoutes: IRouteModel[] = [
  {
    key: "RolePage",
    name: "Danh sách Role",
    title: "Danh sách Role",
    path: "/role",
    private: true,
    roles: [ROOT],
    component: lazy(() => import("modules/permission/page")),
    childs: [],
  },
  {
    key: "PermissionPage",
    name: "Danh sách Permission",
    title: "Danh sách Permission",
    path: "/permission",
    private: true,
    roles: [ROOT],
    component: lazy(() => import("modules/permission/page")),
    childs: [],
  },
  {
    key: "ApiPage",
    name: "Danh sách API",
    title: "Danh sách API",
    path: "/api",
    private: true,
    roles: [ROOT],
    component: lazy(() => import("modules/permission/page")),
    childs: [],
  },
];

export default permissionRoutes;
