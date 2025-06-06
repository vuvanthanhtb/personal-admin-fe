import { lazy } from "react";
import type { IRouteModel } from "../model/route.model";
import { ROOT } from "..";

const todoRoutes: IRouteModel[] = [
  {
    name: "ListTodosPendingPage",
    title: "Danh sách công việc đang chờ",
    path: "/todo/pending",
    private: true,
    component: lazy(() => import("modules/todo/pages/list-pending")),
    roles: [ROOT],
  },
  {
    name: "ListTodosCompletedPage",
    title: "Danh sách công việc đã hoàn thành",
    path: "/todo/completed",
    private: true,
    component: lazy(() => import("modules/todo/pages/list-completed")),
    roles: [ROOT],
  },
];

export default todoRoutes;
