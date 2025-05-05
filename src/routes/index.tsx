import { EducationIcon, SettingsIcon, StatisticsIcon } from "../components/icons";
import LoginPage from "../pages/auth/login";
import NotFoundPage from "../pages/notFound";
import StatisticsPage from "../pages/statistics";
import { TypeRoutes } from "./types"
import WorkingProccessPage from "../pages/working-proccess";
import WorkingProccessDetailPage from "../pages/working-proccess-detail";

export const public_routes: TypeRoutes[] = [
    {
        name: "Login",
        path: "/",
        component: LoginPage,
        config: {
          icon: <StatisticsIcon />,
          structure: "nonlayout",
          isMenu: false,
        },
        submenu: [],
    },
    {
        name: "Not Found",
        path: "/not-found",
        component: NotFoundPage,
        config: {
          icon: <StatisticsIcon />,
          structure: "nonlayout",
          isMenu: false,
        },
        submenu: [],
    },
];

export const private_routes: TypeRoutes[] = [
    {
        name: "Statistics",
        path: "/",
        component: StatisticsPage,
        config: {
          icon: <StatisticsIcon />,
          structure: "layout",
          isMenu: false,
        },
        submenu: [],
    },
    {
        name: "설비 가동 현황",
        path: "/working-proccess",
        component: WorkingProccessPage,
        config: {
          icon: <EducationIcon />,
          structure: "layout",
          isMenu: true,
        },
        submenu: [],
    },
    {
        name: "설비별 생산 현황",
        path: "/working-proccess-detail",
        component: WorkingProccessDetailPage,
        config: {
            icon: <SettingsIcon />,
            structure: "layout",
            isMenu: true,
        },
        submenu: [],
    },
];