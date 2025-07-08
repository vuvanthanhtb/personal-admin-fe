import { lazy } from "react";
import { ROOT } from "shared/constants";
import type { IRouteModel } from "../model/route.model";
import ChatIcon from "shared/assets/message-square-more.svg";

const aiRoutes: IRouteModel[] = [
  {
    key: "UserPage",
    name: "Chat Bot",
    title: "Chat Bot",
    path: "/chat-bot",
    private: true,
    roles: [ROOT],
    icon: ChatIcon,
    component: lazy(() => import("modules/chat-bot/page")),
    childs: []
  },
];

export default aiRoutes;
