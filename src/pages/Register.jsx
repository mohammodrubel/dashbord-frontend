import React from 'react';
import { useForm } from 'react-hook-form';
import { useRegisterMutation } from '../redux/Featchers/Auth/AuthApi';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

function Register() {
  const { register, handleSubmit } = useForm();
  const [registerData]=useRegisterMutation() 
  const navigate = useNavigate()
  const onSubmit = async(data) => {
    try{
      const res =await  registerData(data).unwrap();
      if(res?.statusCode === 201){
        toast.success(res.data?.message)
        setTimeout(()=>{
          navigate('/login')
        },[2000])
      }
    }catch(error){
      const errorData = await error 
      if(errorData.data){
        // toast.error(errorData?.data?.message)
        console.log(errorData?.message)
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

