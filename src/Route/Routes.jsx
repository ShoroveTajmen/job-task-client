
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout/MainLayout';
import Errorpage from '../Pages/Errorpage/Errorpage';
import Home from '../Pages/Home/Home';

const myCreateRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default myCreateRoutes;