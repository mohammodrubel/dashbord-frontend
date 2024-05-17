import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/Featchers/Auth/AuthApi';
import { toast } from 'sonner';
import veryfyToken from '../utils/verifyToken';
import { useDispatch } from 'react-redux';
import { setUsers } from '../redux/Featchers/Auth/AuthSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { register, handleSubmit } = useForm();
  const [loginData] = useLoginMutation()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = async(data) => {
    try{
      const res = await loginData(data).unwrap()

        if(res.statusCode === 200){
          toast.success(res?.message)
        }
      const user = await veryfyToken(res?.data?.data?.accessToken)
      dispatch(setUsers({user:user,token:res?.data?.data?.accessToken}))
      if(res.statusCode === 200){
        setTimeout(()=>{
          navigate('/')
        },[2000])
      }
    }
    catch(error){
      toast.error(error?.data?.message)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', { required: true })}
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register('password', { required: true })}
              className="w-full border rounded px-3 py-2 mt-1"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
