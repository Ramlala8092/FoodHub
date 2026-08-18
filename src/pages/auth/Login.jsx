// import React,{useState} from 'react';
// import { Form,Link } from 'react-router-dom';
// import { FaRegEye,FaRegEyeSlash } from "react-icons/fa";


// const Login = () => {

//     const [email,setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [showPassword,setShowPassword] = useState(false);

//   return (
//     <div className='w-full h-screen flex justify-center items-center'>
//          <form action="" className=' max-w-100 w-full space-y-9 border-2 border-gray-300 p-6 rounded-2xl'>
//           <div className=''>
//               <h2 className='text-2xl text-center text-cyan-600 font-bold'>Login</h2>
//               <p className='text-center text-gray-500 text-sm font-medium'>It will take 3 seconds.</p>
//           </div>

//           <div className='flex flex-col gap-9'>
//              <div>
//                  <label htmlFor="email">Email <sup className='text-red-600 font-bold text-lg'>*</sup></label>
//                  <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter email' className='mt-2 w-full outline-0 rounded p-2.5 ring-1 focus:ring-1 focus:ring-purple-600' required />
//              </div>
//              <div className='relative'>
//                  <label htmlFor="password">Password <sup className='text-red-600 font-bold text-lg'>*</sup></label>
//                  <div onClick={() => setShowPassword(!showPassword)}>
//                      <input type={showPassword ?  "text":"password"} id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='at least 8 character' className='mt-2 w-full outline-0 rounded p-2.5 ring-1 focus:ring-1 focus:ring-purple-600' required />
//                      <div className='absolute top-[66%] translate-[-30%] right-2 cursor-pointer'>
//                         {showPassword ? <FaRegEye size={22}/> : <FaRegEyeSlash size={22} />}
//                      </div>
//                  </div>
//              </div>
//           </div>
          
//           <div>
//               <button type='submit' className='w-full p-2.5 bg-cyan-800 font-semibold rounded-md text-white tracking-wide mb-3 hover:bg-cyan-700 hover:cursor-pointer'>Login</button>
//               <p className='text-center text-gray-500'>Create an account <Link to="/signup" className='text-cyan-600 font-medium hover:text-purple-600 underline'>Signup</Link></p>
//           </div>
//          </form>
//     </div>
//   );
// }

// export default Login


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  // Login
  const handleLogin = (e) => {
    e.preventDefault();

    const { email, password } = formData;

    // Empty field
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    // Get users
    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    // Find user
    const user = users.find(
      (item) =>
        item.email.toLowerCase() === email.toLowerCase() &&
        item.password === password
    );

    // Wrong details
    if (!user) {
      setError("Invalid email or password");
      return;
    }

    // Save current user
    localStorage.setItem(
      "currentUser",
      JSON.stringify(user)
    );

    // Login successful
    // Page refresh nahi hoga
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 pt-24">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center">
          Welcome Back
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-6">
          Login to your Food Hub account
        </p>

        {/* Error */}
        {error && (
          <div className="mb-5 bg-red-100 text-red-600 px-4 py-3 rounded-lg text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>

          {/* Email */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="block font-semibold mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
            />
          </div>

          {/* Login */}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 active:scale-95 transition"
          >
            Login
          </button>

        </form>

        {/* Signup */}
        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-orange-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
