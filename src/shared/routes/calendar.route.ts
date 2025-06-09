import { lazy } from "react";
import { ROOT } from "shared/constants";
import type { IRouteModel } from "../model/route.model";
import CalendarIcon from "shared/assets/calendar-days.svg";

const calendarRoutes: IRouteModel[] = [
  {
    key: "CalendarPage",
    name: "Lịch tổng hợp",
    title: "Lịch tổng hợp",
    path: "/calendar",
    private: true,
    roles: [ROOT],
    icon: CalendarIcon,
    component: lazy(() => import("modules/calendar/page")),
    childs: [],
  },
];

export default calendarRoutes;
