import React,{useState} from 'react';
import { Form,Link } from 'react-router-dom';

const Signup = () => {

   const [fullname,setFullname] = useState("");
   const [email,setEmail] = useState("");
   const [password, setPassword] = useState("");

  return (
    <div className='w-full h-screen flex justify-center items-center'>
         <form action="" className=' max-w-100 w-full space-y-6 border-2 border-gray-300 p-6 rounded-2xl'>
          <div className=''>
              <h2 className='text-2xl text-center text-purple-600 font-bold'>Sign-up</h2>
              <p className='text-center text-gray-500 text-sm font-medium'>It will take 3 seconds.</p>
          </div>

          <div className='flex flex-col gap-5'>
             <div>
                 <label htmlFor="fullname">Fullname <sup className='text-red-700 font-bold text-lg'>*</sup></label>
                 <input type="text" id='fullname' value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder='Enter fullname' className='mt-2 w-full outline-0 rounded p-2.5 ring-1 focus:ring-1 focus:ring-purple-600' required />
             </div>
             <div>
                 <label htmlFor="email">Email <sup className='text-red-600 font-bold text-lg'>*</sup></label>
                 <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' className='mt-2 w-full outline-0 rounded p-2.5 ring-1 focus:ring-1 focus:ring-purple-600' required />
             </div>
             <div>
                 <label htmlFor="password">Password <sup className='text-red-600 font-bold text-lg'>*</sup></label>
                 <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='at least 8 character' className='mt-2 w-full outline-0 rounded p-2.5 ring-1 focus:ring-1 focus:ring-purple-600' required />
             </div>
          </div>
          
          <div>
              <button type='submit' className='w-full p-2.5 bg-purple-600 font-semibold rounded-md text-white tracking-wide mb-3 hover:bg-purple-700 hover:cursor-pointer'>Signup</button>
              <p className='text-center text-gray-500'>Already have an account? <Link to="/login" className='text-purple-500 font-medium hover:text-purple-600'>Login</Link></p>
          </div>
         </form>
    </div>
  );
}

export default Signup
