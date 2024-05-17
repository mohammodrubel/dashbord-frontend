import { Link } from "react-router-dom";

export const CustomItem = [
    {
      key: '1',
      label: 'Dashbord',
    },
    {
      key: '2',
      label: 'User Management',
      children: [
        {
          key: '01',
          label:<Link to='/dashbord/permissions'> Permissinos</Link> 
        },
        {
          key: '02',
          label:<Link to='/dashbord/roles'> Roles</Link>
        },
        {
          key: '03',
          label:<Link to='/dashbord/users'> Users</Link>
        },
        {
          key: '04',
          label:<Link to='/dashbord/teams'> Teams</Link> 
        },
      ]
    },
    {
      key: '3',
      label: 'menu2'
    }
  ];

  export default CustomItem