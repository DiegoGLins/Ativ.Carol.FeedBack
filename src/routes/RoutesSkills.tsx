import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import DefaultLayout from "../layout/DefaultLayout";
import AlexandreCardSkill from "../pages/Alexandre";
import DiegoCardSkill from "../pages/Diego";
import IgorCardSkill from "../pages/Igor";
import JeffersonCardSkill from "../pages/Jefferson";
import MisaelCardSkill from "../pages/Misael";
import PratickCardSkill from "../pages/Patrick";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout children={<Home />} />,
  },
  {
    path: "/diego",
    element: <DefaultLayout children={<DiegoCardSkill />} />,
  },
  {
    path: "/alexandre",
    element: <DefaultLayout children={<AlexandreCardSkill />} />,
  },
  {
    path: "/patrick",
    element: <DefaultLayout children={<PratickCardSkill />} />,
  },
  {
    path: "/jefferson",
    element: <DefaultLayout children={<JeffersonCardSkill />} />,
  },
  {
    path: "/misael",
    element: <DefaultLayout children={<MisaelCardSkill />} />,
  },
  {
    path: "/igor",
    element: <DefaultLayout children={<IgorCardSkill />} />,
  },
]);

const RoutesSkills: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default RoutesSkills;
