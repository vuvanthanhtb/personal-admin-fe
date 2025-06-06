import todoRoutes from "../routes/todo.route";
const sidebarConfig = [
  {
    name: "TODO",
    key: "TODO",
    childs: [...todoRoutes],
  },
];

export default sidebarConfig;
