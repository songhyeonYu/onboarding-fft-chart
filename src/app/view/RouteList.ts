import { RouteListType } from "./type";

const routeList: RouteListType[] = [
  {
    name: "login",
    path: "/",
    private: false,
  },
  {
    name: "chart",
    path: "/chart",
    private: true,
  },
  {
    name: "news",
    path: "/news",
    private: true,
  },
  {
    name: "community",
    path: "/community",
    private: true,
  },
];

export default routeList;
