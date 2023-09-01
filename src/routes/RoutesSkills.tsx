import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Diego from "../pages/Diego";
import Alexandre from "../pages/Alexandre";
import Igor from "../pages/Igor";
import Jefferson from "../pages/Jefferson";
import Misael from "../pages/Misael";
import Patrick from "../pages/Patrick";
import Home from "../pages/Home";
import DefaultLayout from "../layout/DefaultLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout children={<Home />} />,
  },
  {
    path: "/diego",
    element: <DefaultLayout children={<Diego />} />,
  },
  {
    path: "/alexandre",
    element: <DefaultLayout children={<Alexandre />} />,
  },
  {
    path: "/patrick",
    element: <DefaultLayout children={<Patrick />} />,
  },
  {
    path: "/jefferson",
    element: <DefaultLayout children={<Jefferson />} />,
  },
  {
    path: "/misael",
    element: <DefaultLayout children={<Misael />} />,
  },
  {
    path: "/igor",
    element: <DefaultLayout children={<Igor />} />,
  },
]);

const RoutesSkills: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default RoutesSkills;
