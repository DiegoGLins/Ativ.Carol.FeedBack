import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DiegoCardSkill from "../page/Diego";
import CardSkillHome from "../page/Home";
import AlexandreCardSkill from "../page/Alexandre";
import PatrickCardSkill from '../page/Patrick'
import JeffersonCardSkill from "../page/Jefferson";
import MisaelCardSkill from "../page/Misael";
import IgorCardSkill from "../page/Igor";


const router = createBrowserRouter([
    {
        path: '/',
        element: <CardSkillHome />
    },
    {
        path: '/diego',
        element: <DiegoCardSkill />
    },
    {
        path: '/alexandre',
        element: <AlexandreCardSkill />
    },
    {
        path: '/patrick',
        element: <PatrickCardSkill />
    },
    {
        path: '/jefferson',
        element: <JeffersonCardSkill />
    },
    {
        path: '/misael',
        element: <MisaelCardSkill />
    },
    {
        path: '/igor',
        element: <IgorCardSkill />
    },

])


const RoutesSkill: React.FC = () => {
    return <RouterProvider router={router} />;
};

export default RoutesSkill;