
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout/MainLayout';
import Errorpage from '../Pages/Errorpage/Errorpage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

const myCreateRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    }
])

export default myCreateRoutes;