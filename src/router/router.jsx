import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRouter from "./ProtectedRouter/ProtectedRouter";
import Dashbord from "../Dashbord/Dashbord";
import Teams from "../Dashbord/UserManagement/Teams";
import Roles from "../Dashbord/UserManagement/Roles";
import Users from "../Dashbord/UserManagement/Users";
import Permissions from "../Dashbord/UserManagement/Permissions";




export const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<ProtectedRouter><App /></ProtectedRouter>
        },
        {
            path:'/dashbord',
            element:<ProtectedRouter><Dashbord/></ProtectedRouter>,
            children:[
                {
                    path:'users',
                    element:<Users/>
                },
                {
                    path:'teams',
                    element:<Teams/>
                },
                {
                    path:'roles',
                    element:<Roles/>
                },
                {
                    path:'permissions',
                    element:<Permissions/>
                }
            ]
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
    ]
)