import React from 'react'
import { useGetAllUsersQuery } from '../../redux/Featchers/Auth/AuthApi'


function Users() {
  const {data} = useGetAllUsersQuery()
  console.log(data)
 
  return (
    <div>Users</div>
  )
}

export default Users