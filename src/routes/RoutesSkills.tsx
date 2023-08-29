import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Diego from "../page/Diego";
import Alexandre from "../page/Alexandre";
import Igor from "../page/Igor";
import Jefferson from "../page/Jefferson";
import Misael from "../page/Misael";
import Patrick from "../page/Patrick";


const router = createBrowserRouter([
    {
        path: '/diego',
        element: <Diego />
    },
    {
        path: '/alexandre',
        element: <Alexandre />
    },
    {
        path: '/patrick',
        element: <Patrick />
    },
    {
        path: '/jefferson',
        element: <Jefferson />
    },
    {
        path: '/misael',
        element: <Misael />
    },
    {
        path: '/igor',
        element: <Igor />
    },

])

const RoutesSkills: React.FC = () => {
    return <RouterProvider router={router} />
}

export default RoutesSkills