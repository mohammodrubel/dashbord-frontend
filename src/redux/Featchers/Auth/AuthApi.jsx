import { baseApi } from "../../api/baseApi"

const authApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(userinfo)=>({
                url:'/auth/login',
                method:'POST',
                body:userinfo
            })
        }),
        register:builder.mutation({
            query:(data)=>({
                url:'/auth/create-user',
                method:'POST',
                body:data
            })
        }),
        getAllUsers:builder.query({
            query:()=>({
                url:'/auth/user',
                method:'GET'
            })
        })
    })
})

export const {useLoginMutation,useRegisterMutation,useGetAllUsersQuery} = authApi