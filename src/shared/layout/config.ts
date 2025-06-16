import calendarRoutes from "shared/routes/calendar.route";
import permissionRoutes from "shared/routes/permission.route";
import userRoutes from "shared/routes/user.route";
import ListCheckIcon from "shared/assets/list-checks.svg";

const sidebarConfig: any[] = [
  ...calendarRoutes,
  {
    name: "Quản lý tài khoản",
    key: "USER",
    icon: ListCheckIcon,
    childs: userRoutes,
  },
  {
    name: "Quản lý phân quyền",
    key: "PERMISSION",
    icon: ListCheckIcon,
    childs: permissionRoutes,
  },
];

export default sidebarConfig;
