// ** React Imports
import { Fragment, lazy } from "react";
import { Navigate } from "react-router-dom";
// ** Layouts
import BlankLayout from "@layouts/BlankLayout";
import VerticalLayout from "@src/layouts/VerticalLayout";
import HorizontalLayout from "@src/layouts/HorizontalLayout";
import LayoutWrapper from "@src/@core/layouts/components/layout-wrapper";

// ** Route Components
import PublicRoute from "@components/routes/PublicRoute";

// ** Utils
import { isObjEmpty } from "@utils";

const getLayout = {
  blank: <BlankLayout />,
  vertical: <VerticalLayout />,
  horizontal: <HorizontalLayout />,
};

// ** Document title
const TemplateTitle = "%s - Metacycle Client Page";

// ** Default Route
const DefaultRoute = "/login";

const Login = lazy(() => import("../../views/Login"));
const Register = lazy(() => import("../../views/Register"));
const ForgotPassword = lazy(() => import("../../views/ForgotPassword"));
const Error = lazy(() => import("../../views/Error"));
const DashBoard = lazy(() => import("../../views/DashBoard"));
const DailySummary = lazy(() => import("../../views/DailySummary"));
const Calendar = lazy(() => import("../../views/calendar/index"));
const NewsBoard = lazy(() => import("../../views/NewsBoard"));
const NewsDetail = lazy(() => import("../../views/NewsDetail"));
const Riding = lazy(() => import("../../views/exercises/Riding"));
const Walking = lazy(() => import("../../views/exercises/Walking"));
const Stairs = lazy(() => import("../../views/exercises/Stairs"));
const UsedContents = lazy(() =>
  import("../../views/contents/usedContents/UsedContents")
);
const ContentStat = lazy(() =>
  import("../../views/contents/contentStat/ContentStat")
);
const CourseStat = lazy(() =>
  import("../../views/contents/courseStat/CourseStat")
);
const TrainerInterworking = lazy(() =>
  import("../../views/trainer/TrainerInterworking")
);
const FitnessCenter = lazy(() => import("../../views/trainer/FitnessCenter"));
const PersonalTrainer = lazy(() =>
  import("../../views/trainer/PersonalTrainer")
);
const SNS = lazy(() => import("../../views/SNS"));
const NewsAlert = lazy(() => import("../../views/NewsAlert"));
const EarnPoints = lazy(() =>
  import("../../views/points/earnPoints/EarnPoints")
);
const UsePoints = lazy(() => import("../../views/points/UsePoints"));
const UserSetting = lazy(() =>
  import("../../views/pages/account-settings/index")
);
const Faq = lazy(() => import("../../views/pages/faq/index"));
const TOSInfo = lazy(() => import("../../views/TOSInfo"));
const PrivacyInfo = lazy(() => import("../../views/PrivacyInfo"));

// ** Merge Routes
const Routes = [
  {
    path: "/",
    index: true,
    exact: true,
    element: <Navigate replace to={DefaultRoute} />,
  },
  {
    path: "/dashBoard",
    element: <DashBoard />,
  },
  {
    path: "/dailySummary",
    element: <DailySummary />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
  },
  {
    path: "/newsBoard",
    element: <NewsBoard />,
  },
  {
    path: "/newsDetail/:idx",
    element: <NewsDetail />,
  },
  {
    path: "/NewsAlert/:idx",
    element: <NewsAlert />,
  },
  {
    path: "/login",
    element: <Login />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/register",
    element: <Register />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/error",
    element: <Error />,
    meta: {
      layout: "blank",
    },
  },
  {
    path: "/riding",
    element: <Riding />,
  },
  {
    path: "/walking",
    element: <Walking />,
  },
  {
    path: "/stairs",
    element: <Stairs />,
  },
  {
    path: "/usedContents",
    element: <UsedContents />,
  },
  {
    path: "/ContentStat",
    element: <ContentStat />,
  },
  {
    path: "/CourseStat",
    element: <CourseStat />,
  },
  {
    path: "/trainerInterworking",
    element: <TrainerInterworking />,
  },
  {
    path: "/fitnessCenter",
    element: <FitnessCenter />,
  },
  {
    path: "/personalTrainer",
    element: <PersonalTrainer />,
  },
  {
    path: "/SNS",
    element: <SNS />,
  },
  {
    path: "/earnPoints",
    element: <EarnPoints />,
  },
  {
    path: "/usePoints",
    element: <UsePoints />,
  },
  {
    path: "/userSetting",
    element: <UserSetting />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/privacyInfo",
    element: <PrivacyInfo />,
  },
  {
    path: "/tosInfo",
    element: <TOSInfo />,
  },
];

const getRouteMeta = (route) => {
  if (isObjEmpty(route.element.props)) {
    if (route.meta) {
      return { routeMeta: route.meta };
    } else {
      return {};
    }
  }
};

// ** Return Filtered Array of Routes & Paths
const MergeLayoutRoutes = (layout, defaultLayout) => {
  const LayoutRoutes = [];

  if (Routes) {
    Routes.filter((route) => {
      let isBlank = false;
      // ** Checks if Route layout or Default layout matches current layout
      if (
        (route.meta && route.meta.layout && route.meta.layout === layout) ||
        ((route.meta === undefined || route.meta.layout === undefined) &&
          defaultLayout === layout)
      ) {
        const RouteTag = PublicRoute;

        // ** Check for public or private route
        if (route.meta) {
          route.meta.layout === "blank" ? (isBlank = true) : (isBlank = false);
        }
        if (route.element) {
          const Wrapper =
            // eslint-disable-next-line multiline-ternary
            isObjEmpty(route.element.props) && isBlank === false
              ? // eslint-disable-next-line multiline-ternary
                LayoutWrapper
              : Fragment;

          route.element = (
            <Wrapper {...(isBlank === false ? getRouteMeta(route) : {})}>
              <RouteTag route={route}>{route.element}</RouteTag>
            </Wrapper>
          );
        }

        // Push route to LayoutRoutes
        LayoutRoutes.push(route);
      }
      return LayoutRoutes;
    });
  }
  return LayoutRoutes;
};

const getRoutes = (layout) => {
  const defaultLayout = layout || "vertical";
  const layouts = ["vertical", "horizontal", "blank"];

  const AllRoutes = [];

  layouts.forEach((layoutItem) => {
    const LayoutRoutes = MergeLayoutRoutes(layoutItem, defaultLayout);

    AllRoutes.push({
      path: "/",
      element: getLayout[layoutItem] || getLayout[defaultLayout],
      children: LayoutRoutes,
    });
  });
  return AllRoutes;
};

export { DefaultRoute, TemplateTitle, Routes, getRoutes };
