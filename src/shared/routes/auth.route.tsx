import { lazy } from "react";
import type { IRouteModel } from "../model/route.model";

const authRoutes: IRouteModel[] = [
  {
    name: "LoginPage",
    title: "Đăng nhập",
    path: "/login",
    private: false,
    component: lazy(() => import("@modules/auth/pages/login")),
  },
];

export default authRoutes;
