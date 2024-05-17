import AdminDashbord from "../Dashbord/AdminManagement/AdminDashbord";
import ListOfAdmin from "../Dashbord/AdminManagement/ListOfAdmin";
import Permissions from "../Dashbord/UserManagement/permissions";
import Teams from "../Dashbord/UserManagement/Teams";
import Users from "../Dashbord/UserManagement/Users";

export const AdminRouter = [
    {
      name: 'Dashbord',
      path:'dashbord',
      element:<AdminDashbord/>
    },
    {
      name: 'User Management',
      children: [
        {
          name: 'Permissinos',
          path: 'permissinos',
          element:<Permissions/>
        },
        {
          name: 'Roles',
          path: 'roles',
          element:<Roles/>
        },
        {
          name: 'Users',
          path: 'users',
          element: <Users/>
        },
        {
          name: 'Teams',
          path: 'Teams',
          element: <Teams/>,
        },
      ]
    },
    {
        name: 'AdminList',
        path:'adminlist',
        element:<ListOfAdmin/>
    }
  ];

