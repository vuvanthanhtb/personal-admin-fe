import calendarRoutes from "shared/routes/calendar.route";
import permissionRoutes from "shared/routes/permission.route";
import userRoutes from "shared/routes/user.route";
import UsersIcon from "shared/assets/users.svg";
import ShieldCheckIcon from "shared/assets/shield-check.svg";

const sidebarConfig: any[] = [
  ...calendarRoutes,
  {
    name: "Quản lý tài khoản",
    key: "USER",
    icon: UsersIcon,
    childs: userRoutes,
  },
  {
    name: "Quản lý phân quyền",
    key: "PERMISSION",
    icon: ShieldCheckIcon,
    childs: permissionRoutes,
  },
];

export default sidebarConfig;
