import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Navigate} from 'react-router-dom'
// import veryfyToken from '../utils/veryfyToken'
import { currentToken, logout } from '../../redux/Featchers/Auth/AuthSlice'
import veryfyToken from '../../utils/verifyToken'


function ProtectedRouter({children,role}) {
    const dispatch = useDispatch()
    const token = useSelector(currentToken)
    let user ;
        if(token){
            user = veryfyToken(token)
        }
        if(role !== undefined && role !== user?.role){
            dispatch(logout())
        }
        if(!token){
            return <Navigate to='/login' replace={true}></Navigate>
        }
    return children
}

export default ProtectedRouter
