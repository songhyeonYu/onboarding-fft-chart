import Join from "../pages/Join";
import Community from "../pages/Community";
import News from "../pages/News";
import Chart from "../pages/Chart";

type ListType = {
  name: string;
  path: string;
  private: boolean;
  element: JSX.Element;
};

const routeList: ListType[] = [
  {
    name: "로그인",
    path: "/",
    private: false,
    element: <Join />,
  },
  {
    name: "차트",
    path: "/chart",
    private: true,
    element: <Chart />,
  },
  {
    name: "뉴스",
    path: "/news",
    private: true,
    element: <News />,
  },
  {
    name: "커뮤니티",
    path: "/community",
    private: true,
    element: <Community />,
  },
];

export default routeList;
